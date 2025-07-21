import React, { useEffect, useState } from "react";
import FooterPresenter from "./LayoutMovieWrap.presenter";
import * as S from "./LayoutMovieWrap.styles";
import {
  BoxOfficeMovie,
  LayoutMovieWrapTitle01Props,
  TabDataType,
} from "./LayoutMovieWrap.types";
// import { fetchBoxOfficeData } from "../../../../../pages/api/boxoffice"; // 박스오피스 API
import { fetchMovieDetails } from "../../../units/openapi/movie/movieDetails"; // KMDB API

const fetchBoxOfficeData = async () => {
  try {
    const response = await fetch("/api/boxoffice");
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error("박스오피스 데이터를 가져오는 데 실패했습니다:", error);
    return [];
  }
};

export default function LayoutMovieWrapTitle01({
  boxOfficeData,
}: LayoutMovieWrapTitle01Props): JSX.Element {
  // 각 영화별 좋아요 수를 관리하는 상태
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});
  const [movieDetails, setMovieDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  // 컴포넌트가 처음 렌더링 될 때 로컬 스토리지에서 좋아요 수를 가져옴
  useEffect(() => {
    const savedLikeCounts = localStorage.getItem("likeCounts");
    if (savedLikeCounts) {
      setLikeCounts(JSON.parse(savedLikeCounts)); // 로컬 스토리지에서 저장된 좋아요 수를 불러옴
    }
  }, []);

  // 좋아요 버튼 클릭 핸들러
  const handleLikeClick = (ranking: string): void => {
    setLikeCounts((prevLikeCounts) => {
      const newLikeCounts = { ...prevLikeCounts };
      newLikeCounts[ranking] = (newLikeCounts[ranking] || 0) + 1; // 해당 영화의 좋아요 수 증가
      localStorage.setItem("likeCounts", JSON.stringify(newLikeCounts)); // 로컬 스토리지에 저장
      return newLikeCounts;
    });
  };

  // 박스오피스 영화 상세 정보 가져오기
  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        // 박스오피스 영화 정보를 가져옴
        const boxOfficeMovies = await fetchBoxOfficeData();

        // 영화 상세 정보를 가져오기
        const details = await Promise.all(
          boxOfficeMovies.slice(0, 5).map(async (movie: BoxOfficeMovie) => {
            const movieDetail = await fetchMovieDetails(
              movie.movieCd,
              movie.movieNm
            );
            return movieDetail ? movieDetail : null; // 영화 상세 정보가 있을 경우에만 처리
          })
        );
        setMovieDetails(details.filter((detail) => detail !== null));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchMovieDetailsData();
  }, []);

  const Item = ({
    title,
    ranking,
    posters,
    director,
    keywords,
  }: {
    title: string;
    ranking: string;
    posters: string;
    director: string; // 감독 정보
    keywords: string; // 키워드 정보
  }) => {
    // 각 영화의 좋아요 수를 가져옴 (기본값은 0)
    const likeCount = likeCounts[ranking] || 0;

    return (
      <S.ItemsWrap>
        <S.ItemWrap>
          <S.ItemImgWrap>
            <img
              src={posters || `/images/layout/moviewrap/post0${ranking}.jpg`}
            />
            <S.ItemHoverWrap>
              <div>hover 이미지</div>
            </S.ItemHoverWrap>
          </S.ItemImgWrap>
          <S.AgeWrap>
            <img src="/images/layout/moviewrap/age12.svg" />
          </S.AgeWrap>
          <S.RankingNum>{ranking}</S.RankingNum>
        </S.ItemWrap>
        <S.ItemMovieTitleWrap>
          <S.ItemMovieTitle>{title}</S.ItemMovieTitle>
          <S.LikeWrap onClick={() => handleLikeClick(ranking)}>
            <img src="/images/layout/moviewrap/like.png" />
            <S.LikeNum>{likeCount}</S.LikeNum>
          </S.LikeWrap>
        </S.ItemMovieTitleWrap>
        <S.ReservationBtn>예매하기</S.ReservationBtn>
      </S.ItemsWrap>
    );
  };

  const TabData: TabDataType[] = [
    {
      id: 1,
      button: "박스오피스",
      content: () => (
        <div>
          {loading ? (
            <p>로딩 중...</p> // 로딩 상태일 때
          ) : (
            movieDetails.map((detail, index) => {
              const movie = boxOfficeData[index];
              return (
                <Item
                  key={movie.movieCd}
                  title={movie.movieNm}
                  ranking={movie.rank}
                  posters={
                    detail?.posters ||
                    "/images/layout/moviewrap/post0${index + 1}.jpg"
                  }
                  director={detail?.directorNm || "정보 없음"}
                  keywords={detail?.keywords || "정보 없음"}
                />
              );
            })
          )}
        </div>
      ),
    },
    {
      id: 2,
      button: "상영예정작",
      content: () => (
        <div>
          <h3>문의사항2</h3>
          <p>문의사항이 있으시면 고객센터로 연락주세요.</p>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(TabData[0].id);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <FooterPresenter
      activeTab={activeTab}
      TabData={TabData}
      handleTabClick={handleTabClick}
    ></FooterPresenter>
  );
}
