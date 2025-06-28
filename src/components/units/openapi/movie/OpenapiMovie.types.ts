// 컴포넌트에서 받는 Props 타입
export interface IOpenapiMovieUIProps {
  boxOfficeData: Movie[];
}

export interface Movie {
  movieCd: any;
  rank: string; // 순위
  movieNm: string; // 영화명
  openDt: string; // 개봉일
  salesAmt: string; // 매출액
  salesShare: string; // 매출 비율
  salesInten: string; // 전일 대비 매출액 증감분
  salesChange: string; // 전일 대비 매출액 증감 비율
  salesAcc: string; // 누적 매출액
  audiCnt: string; // 관객 수
  audiInten: string; // 전일 대비 관객 수 증감분
  audiChange: string; // 전일 대비 관객 수 증감 비율
  audiAcc: string; // 누적 관객 수
  scrnCnt: string; // 상영 스크린 수
  showCnt: string; // 상영 횟수
  posterUrl?: string; // 포스터 URL (선택적)
}
