import React from "react";
import { MovieRecFetch } from "../../hooks/useRecommendation";

interface MovieRecProps {
  moviesRec: MovieRecFetch | null;
}

const MovieRec = ({ moviesRec }: MovieRecProps) => {
  if (!moviesRec) {
    return null;
  }

  const limitedRec = moviesRec.results.slice(0, 6);
  return (
    <div>
      {limitedRec.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieRec;
