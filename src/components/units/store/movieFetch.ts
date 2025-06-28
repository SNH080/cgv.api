import axios from "axios";
import { setBoxOfficeMovies } from "./movieStore";
import { Dispatch } from "redux";

// 박스오피스 API 클라이언트 설정
const boxOfficeClient = axios.create({
  baseURL:
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
  params: {
    key: process.env.REACT_APP_BOX_OFFICE_KEY,
    targetDt: "20241125", // 예시 날짜 (필요시 현재 날짜로 수정 가능)
    itemPerPage: "5",
  },
});

export const getBoxOfficeMoviesFetch = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await boxOfficeClient.get("");
      const boxOfficeData = response.data.boxOfficeResult.dailyBoxOfficeList;
      const moviesList = boxOfficeData.map((movie: any) => ({
        movieCode: movie.movieCd,
        title: movie.movieNm,
        poster: movie.posterUrl, // 포스터 URL 추가
      }));

      dispatch(setBoxOfficeMovies(moviesList));
    } catch (error) {
      console.error("Error fetching box office data:", error);
    }
  };
};
