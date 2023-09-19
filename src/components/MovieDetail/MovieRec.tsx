import React from "react";
import { MovieRecFetch } from "../../hooks/useRecommendation";

interface MovieRecProps {
  moviesRec: MovieRecFetch | null; // Use the correct type name here
}

const MovieRec = ({ moviesRec }: MovieRecProps) => {
  if (!moviesRec) {
    // Handle the case where moviesRec is null or undefined
    return null; // or display a loading message, etc.
  }

  // Now you can map through moviesRec.results and render recommended movies
  return (
    <div>
      {moviesRec.results.map((movie) => (
        // Render each recommended movie here
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          {/* Add other movie details here */}
        </div>
      ))}
    </div>
  );
};

export default MovieRec;
