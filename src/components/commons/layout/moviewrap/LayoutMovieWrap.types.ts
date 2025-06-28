export interface TabDataType {
  id: number;
  button: string;
  content: () => JSX.Element;
}

export interface FooterPresenterProps {
  activeTab: number;
  TabData: TabDataType[];
  handleTabClick: (id: number) => void;
}

// boxOfficeData를 props로 받습니다.
export interface LayoutMovieWrapTitle01Props {
  boxOfficeData: {
    ranking: string;
    posterUrl: string;
    rank: string; // 박스오피스 순위
    movieNm: string; // 영화 제목
    // 추가 필드 필요시 더 추가
  }[];
}

// 영화 정보 타입
export interface Movie {
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
}
