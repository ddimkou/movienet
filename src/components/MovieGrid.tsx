import { Stack } from "@mui/material";
// import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Movie {
  id: number;
  title: string;
}
interface FetchMoviesResponse {
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movie/popular")
      .then((res) => setMovies(res.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={3}
      pt={8}
    >
      {/* movies Grid here
      <MovieCard /> */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </Stack>
  );
};

export default MovieGrid;
