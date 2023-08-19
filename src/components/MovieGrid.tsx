import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface TitleText {
  text: string;
}

interface Movie {
  id: string;
  titleText: TitleText;
}

interface FetchMoviesResponse {
  entries: number;
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/titles")
      .then((res) => {
        if (res.data && res.data.results) {
          setMovies(res.data.results);
        }
      })
      .catch((error) => {
        setError(`There was an error ${error}`);
      });
  }, []); // Empty array to run the effect only once

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.titleText.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieGrid;
