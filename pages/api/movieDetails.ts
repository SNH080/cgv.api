import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Translate } from "@google-cloud/translate/build/src/v2";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const translate = new Translate();

async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error("Google Cloud Translation API 요청 실패:", error);
    throw new Error("Translation failed");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { title, releaseDate } = req.query;

    if (!title || !releaseDate) {
      res.status(400).json({
        error: "Invalid parameters: title and releaseDate are required.",
      });
      return;
    }

    const sanitizedTitle = (typeof title === "string" ? title : title[0])
      .replace(/['",!?.]/g, "")
      .trim();
    const encodedTitle = encodeURIComponent(sanitizedTitle);

    const year =
      typeof releaseDate === "string" ? releaseDate.substring(0, 4) : "";
    const tmdbSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodedTitle}&year=${year}&language=ko`;

    let posterUrl = null;
    let plot = "줄거리 정보가 없습니다.";

    try {
      const tmdbSearchResponse = await axios.get(tmdbSearchUrl);
      const tmdbData = tmdbSearchResponse.data;

      if (tmdbData?.results?.length > 0) {
        const tmdbMovie = tmdbData.results[0];
        const tmdbMovieId = tmdbMovie.id;

        const tmdbDetailsUrl = `https://api.themoviedb.org/3/movie/${tmdbMovieId}?api_key=${TMDB_API_KEY}&language=ko&append_to_response=images,credits,release_dates`;
        const tmdbDetailsResponse = await axios.get(tmdbDetailsUrl);
        const tmdbMovieDetails = tmdbDetailsResponse.data;

        if (tmdbMovieDetails.poster_path) {
          posterUrl = `https://image.tmdb.org/t/p/w500${tmdbMovieDetails.poster_path}`;
        }
        if (tmdbMovieDetails.overview) {
          plot = tmdbMovieDetails.overview;

          if (plot && tmdbMovieDetails.original_language !== "ko") {
            plot = await translateText(plot, "ko");
          }
        }
      }
    } catch (tmdbError) {
      console.error("TMDb API 요청 실패:", tmdbError);
    }

    const movieDetails = {
      title: sanitizedTitle,
      releaseDate,
      posterUrl,
      hasPoster: !!posterUrl,
      plot,
    };

    res.status(200).json(movieDetails);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
