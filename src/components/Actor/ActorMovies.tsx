import React from "react";

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
  return (
    <div>
      <ul>
        {movieActor?.cast.map((movie, index) => (
          <li key={index}>
            {movie.title}
            {/* You can add more fields here, like images and so on */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorMovies;
