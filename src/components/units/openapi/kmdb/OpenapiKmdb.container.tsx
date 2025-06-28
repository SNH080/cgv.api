import React, { useEffect, useState } from "react";

const OpenapiKmdb = ({ movieCd }: { movieCd: string }) => {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&movieId=${movieCd}&ServiceKey=J9Z4X606WVM21XDWWQR9`
        );
        const data = await response.json();
        if (data && data.Row && data.Row.length > 0) {
          setMovieDetails(data.Row[0]);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movieCd) {
      fetchMovieDetails();
    }
  }, [movieCd]);

  if (!movieDetails) {
    return <div style={{ display: "none" }}>Loading movie details...</div>;
  }

  return (
    <div>
      <h3>{movieDetails.title}</h3>
      <p>Director: {movieDetails.directorNm}</p>
      <p>Keywords: {movieDetails.keywords}</p>
      <img src={movieDetails.posterUrl} alt={movieDetails.title} />
    </div>
  );
};

export default OpenapiKmdb;
