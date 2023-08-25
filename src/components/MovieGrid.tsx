import { Stack } from "@mui/material";

import MovieCard from "./MovieCard";

const MovieGrid = () => {
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
    </Stack>
  );
};

export default MovieGrid;
