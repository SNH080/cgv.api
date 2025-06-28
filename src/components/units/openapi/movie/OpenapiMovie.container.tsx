import { Movie } from "./OpenapiMovie.types"; // 타입 임포트
import { useEffect, useState } from "react";
import LayoutMovieWrapTitle01 from "../../../commons/layout/moviewrap/LayoutMovieWrap.container";
import OpenapiKmdb from "../kmdb/OpenapiKmdb.container";

export default function OpenapiMovie(): JSX.Element {
  const [boxOfficeData, setBoxOfficeData] = useState<any[]>([]);
  const [moviePosters, setMoviePosters] = useState<{ [key: string]: string }>(
    {}
  ); // 영화 포스터 상태

  const [movieDetails, setMovieDetails] = useState<any[]>([]); // 영화 상세 정보

  // 영화 상세 데이터를 가져오는 함수
  const fetchMovieDetails = async (movieTitle: string) => {
    const apiKey = "J9Z4X606WVM21XDWWQR9"; // KMDB API 키
    const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&movieNm=${encodeURIComponent(
      movieTitle
    )}&ServiceKey=${apiKey}&detail=Y`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // 영화 상세 정보 처리
      if (data && data.search_movie) {
        const movieDetail = data.search_movie[0];
        setMovieDetails((prevDetails) => [
          ...prevDetails,
          {
            title: movieDetail.title,
            director: movieDetail.directorNm,
            keywords: movieDetail.keywords,
            posterUrl: movieDetail.posterUrl,
          },
        ]);
      }
    } catch (error) {
      console.error("영화 상세 정보 API 호출 오류:", error);
    }
  };

  // 박스오피스 데이터를 가져오는 함수
  const fetchBoxOfficeData = async () => {
    const currentDate = new Date();
    const targetDate = formatDate(); // 날짜 포맷 함수 사용

    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=da90a1f0eefdc6cd435a052200dc2e48&targetDt=${targetDate}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("API 요청 실패");
      }

      const data = await res.json();
      if (data.boxOfficeResult && data.boxOfficeResult.dailyBoxOfficeList) {
        const movieList = data.boxOfficeResult.dailyBoxOfficeList;
        setBoxOfficeData(movieList.slice(0, 5)); // 상위 5개 영화만 상태에 설정
      } else {
        console.error("API 응답 데이터가 예상과 다릅니다.");
      }
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  // 날짜 포맷 함수 (현재 날짜를 yyyyMMdd 형식으로)
  const toDay = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  // 날짜를 yyyyMMdd 형식으로 포맷팅하는 함수
  const formatDate = (): string => {
    const today = new Date();
    today.setDate(today.getDate() - 1); // 하루를 뺀 날짜를 구함
    return toDay(today);
  };

  useEffect(() => {
    fetchBoxOfficeData();
  }, []); // 컴포넌트가 마운트될 때만 실행

  useEffect(() => {
    if (boxOfficeData.length > 0) {
      boxOfficeData.forEach((movie) => {
        fetchMovieDetails(movie.movieNm); // 각 영화에 대해 상세 정보 요청
      });
    }
  }, [boxOfficeData]);

  return (
    <>
      {/* KMDB에서 가져온 영화 포스터를 각 영화와 결합 */}
      {boxOfficeData.length > 0 && (
        <OpenapiKmdb
          movieTitles={boxOfficeData.map((movie) => movie.movieNm)} // 영화명 목록 전달
          setMoviePosters={setMoviePosters} // 포스터를 상위 컴포넌트로 전달
        />
      )}

      {/* LayoutMovieWrapTitle01 컴포넌트에 데이터 전달 */}
      {/* <LayoutMovieWrapTitle01
        boxOfficeData={boxOfficeData}
        moviePosters={moviePosters} // 포스터 URL을 함께 전달
        movieDetails={movieDetails} // 영화 상세 정보 전달
      /> */}
    </>
  );
}
