import { Stack, Typography } from "@mui/material";

import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

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
      {error && <Typography>{error}</Typography>}

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Stack>
  );
};

export default MovieGrid;
