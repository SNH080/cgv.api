import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const KOBIS_API_KEY = "da90a1f0eefdc6cd435a052200dc2e48"; // 영화진흥위원회 API 키

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const targetDt = yesterday.toISOString().split("T")[0].replace(/-/g, "");
  console.log("요청 날짜:", targetDt); // 디버깅용 로그

  try {
    const { data } = await axios.get(
      `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KOBIS_API_KEY}&targetDt=${targetDt}`
    );

    const movies = data.boxOfficeResult.dailyBoxOfficeList
      .map((movie: any) => ({
        rank: movie.rank,
        title: movie.movieNm,
        openDate: movie.openDt,
      }))
      .slice(0, 5); // 5위까지만 가져오기

    res.status(200).json({ movies });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
}
