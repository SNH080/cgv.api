import type { Movie, IOpenapiMovieUIProps } from "./OpenapiMovie.types";

export default function OpenapiMovieUI({
  boxOfficeData,
}: IOpenapiMovieUIProps): JSX.Element {
  if (boxOfficeData.length === 0) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <div>
      <h1>박스오피스 순위</h1>
      <ul>
        {boxOfficeData.map((movie: Movie, index: number) => (
          <li key={index}>
            <strong>
              {index + 1}. {movie.movieNm}
            </strong>
            <br />
            관객 수: {movie.audiAcc}명
            <br />
            개봉일: {movie.openDt}
          </li>
        ))}
      </ul>
    </div>
  );
}
