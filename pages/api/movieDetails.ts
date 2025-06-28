import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { initDb } from "../../utils/db";
import { Translate } from "@google-cloud/translate/build/src/v2";

const TMDB_API_KEY = process.env.TMDB_API_KEY; // 환경 변수에서 API 키 가져오기

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

    console.log("API 호출 시작");
    console.log("요청된 제목:", title, "요청된 개봉일:", releaseDate);

    if (!title || !releaseDate) {
      console.error("title 또는 releaseDate가 누락되었습니다.");
      res.status(400).json({
        error: "Invalid parameters: title and releaseDate are required.",
      });
      return;
    }

    const sanitizedTitle = (title as string).replace(/['",!?.]/g, "").trim();
    const encodedTitle = encodeURIComponent(sanitizedTitle);

    const db = await initDb();
    const cachedMovie = await db.get("SELECT * FROM movies WHERE title = ?", [
      sanitizedTitle,
    ]);

    if (cachedMovie) {
      console.log("캐시된 데이터 반환:", cachedMovie);
      res.status(200).json(cachedMovie);
      return;
    }

    const tmdbSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodedTitle}&year=${releaseDate.substring(
      0,
      4
    )}&language=ko`;
    console.log("TMDb API 검색 요청 URL:", tmdbSearchUrl);

    let posterUrl = null;
    let plot = "줄거리 정보가 없습니다.";

    try {
      const tmdbSearchResponse = await axios.get(tmdbSearchUrl);
      console.log(
        "TMDb API 검색 응답 데이터:",
        JSON.stringify(tmdbSearchResponse.data, null, 2)
      );

      const tmdbData = tmdbSearchResponse.data;

      if (tmdbData && tmdbData.results && tmdbData.results.length > 0) {
        const tmdbMovie = tmdbData.results[0];
        const tmdbMovieId = tmdbMovie.id;

        const tmdbDetailsUrl = `https://api.themoviedb.org/3/movie/${tmdbMovieId}?api_key=${TMDB_API_KEY}&language=ko&append_to_response=images,credits,release_dates`;
        console.log("TMDb API 상세 정보 요청 URL:", tmdbDetailsUrl);

        const tmdbDetailsResponse = await axios.get(tmdbDetailsUrl);
        console.log(
          "TMDb API 상세 정보 응답 데이터:",
          JSON.stringify(tmdbDetailsResponse.data, null, 2)
        );
        const tmdbMovieDetails = tmdbDetailsResponse.data;

        if (tmdbMovieDetails.poster_path) {
          posterUrl = `https://image.tmdb.org/t/p/w500${tmdbMovieDetails.poster_path}`;
          console.log("TMDb 포스터 URL:", posterUrl);
        }
        if (tmdbMovieDetails.overview) {
          plot = tmdbMovieDetails.overview;
          console.log("TMDb 줄거리:", plot);

          // 줄거리가 영어로 제공되는 경우 한국어로 번역
          if (plot && tmdbMovieDetails.original_language !== "ko") {
            plot = await translateText(plot, "ko");
            console.log("번역된 줄거리:", plot);
          }
        }
      } else {
        console.log("TMDb 데이터 없음");
      }
    } catch (tmdbError) {
      console.error("TMDb API 요청 실패:", tmdbError);
    }

    const cleanedTitle = title.replace(/['",!?.]/g, "").trim();
    const movieDetails = {
      title: cleanedTitle,
      releaseDate,
      posterUrl: posterUrl || null,
      hasPoster: !!posterUrl,
      plot: plot,
    };

    console.log("최종 영화 데이터:", JSON.stringify(movieDetails, null, 2)); // 최종 데이터 로그 추가

    await db.run(
      "INSERT INTO movies (title, releaseDate, posterUrl, plot) VALUES (?, ?, ?, ?)",
      [
        cleanedTitle,
        movieDetails.releaseDate,
        movieDetails.posterUrl,
        movieDetails.plot,
      ]
    );

    res.status(200).json(movieDetails);
  } catch (error: any) {
    console.error("API 호출 에러:", error.message || error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
