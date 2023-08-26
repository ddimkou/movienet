import { Stack, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={3}
      pt={8}
    >
      movies Grid here
      <MovieCard />
      {error && <Typography>{error}</Typography>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </Stack>
  );
};

export default MovieGrid;
