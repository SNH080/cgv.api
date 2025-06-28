import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../../../../components/commons/layout/moviewrap/LayoutMovieWrap.styles";

interface Movie {
  rank: string;
  title: string;
  openDate: string;
  posterUrl?: string;
  plot?: string;
}

export default function TestApi() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});

  // 로컬 스토리지에서 좋아요 수 불러오기
  useEffect(() => {
    const savedLikeCounts = localStorage.getItem("likeCounts");
    if (savedLikeCounts) {
      setLikeCounts(JSON.parse(savedLikeCounts));
    }
  }, []);

  // 좋아요 클릭 핸들러
  const handleLikeClick = (rank: string) => {
    setLikeCounts((prev) => {
      const updated = { ...prev, [rank]: (prev[rank] || 0) + 1 };
      localStorage.setItem("likeCounts", JSON.stringify(updated));
      return updated;
    });
  };

  // 영화 API 호출
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data: boxOfficeData } = await axios.get("/api/boxoffice");

        const detailedMovies = await Promise.all(
          boxOfficeData.movies.map(async (movie: Movie) => {
            try {
              const { data: movieDetails } = await axios.get(
                "/api/movieDetails",
                {
                  params: {
                    title: movie.title,
                    releaseDate: movie.openDate,
                  },
                }
              );
              return { ...movie, ...movieDetails };
            } catch (error) {
              console.error("영화 상세정보 호출 실패:", error);
              return movie;
            }
          })
        );

        setMovies(detailedMovies);
      } catch (error) {
        console.error("박스오피스 API 호출 에러:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <S.TabWrap>
      <S.TabHeader>
        <h2 style={{ color: "#fff" }}>박스오피스 Top 5</h2>
      </S.TabHeader>
      <S.TabContent>
        {movies.slice(0, 5).map((movie) => (
          <S.ItemsWrap key={movie.rank}>
            <S.ItemWrap>
              <S.ItemImgWrap>
                <img
                  src={
                    movie.posterUrl ||
                    `/images/layout/moviewrap/post0${movie.rank}.jpg`
                  }
                  alt={`${movie.title} 포스터`}
                />
                <S.ItemHoverWrap>
                  <p>{movie.plot || "줄거리 정보 없음"}</p>
                </S.ItemHoverWrap>
              </S.ItemImgWrap>
              <S.AgeWrap>
                <img src="/images/layout/moviewrap/age12.svg" alt="관람등급" />
              </S.AgeWrap>
              <S.RankingNum>{movie.rank}</S.RankingNum>
            </S.ItemWrap>

            <S.ItemMovieTitleWrap>
              <S.ItemMovieTitle>{movie.title}</S.ItemMovieTitle>
              <S.LikeWrap onClick={() => handleLikeClick(movie.rank)}>
                <img src="/images/layout/moviewrap/like.png" alt="좋아요" />
                <S.LikeNum>{likeCounts[movie.rank] || 0}</S.LikeNum>
              </S.LikeWrap>
            </S.ItemMovieTitleWrap>

            <S.ReservationBtn>예매하기</S.ReservationBtn>
          </S.ItemsWrap>
        ))}
      </S.TabContent>
    </S.TabWrap>
  );
}
