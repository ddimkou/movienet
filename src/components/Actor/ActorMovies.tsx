import React from "react";
import MovieCard from "../MovieCard";

interface ActorMoviesProps {
  movieActor: {
    cast: {
      backdrop_path: string;
      id: number;
      title: string;
    }[];
  } | null;
}

const ActorMovies = ({ movieActor }: ActorMoviesProps) => {
  const limitedMovies = movieActor?.cast.slice(0, 6);

  return (
    <div>
      <ul>
        {limitedMovies?.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActorMovies;
