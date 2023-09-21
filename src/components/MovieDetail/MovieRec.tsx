import React from "react";
import { MovieRecFetch } from "../../hooks/useRecommendation";
import MovieCard from "../MovieCard";
import { Box, Typography } from "@mui/material";

interface MovieRecProps {
  moviesRec: MovieRecFetch | null;
}

const MovieRec = ({ moviesRec }: MovieRecProps) => {
  if (!moviesRec) {
    return null;
  }

  const limitedRec = moviesRec.results.slice(0, 6);
  console.log(limitedRec);
  return (
    <Box mt={8} mb={20}>
      <Typography variant="h6" textAlign="center" width="100%">
        <strong>Recommended Movies</strong>
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        mt={5}
        gap={3}
      >
        {limitedRec.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default MovieRec;
