import { MovieRecFetch } from "../../hooks/useRecommendation";
import MovieCard from "../MovieCard";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { scrollToTop } from "../../services/scrollToTop";

interface MovieRecProps {
  moviesRec: MovieRecFetch | null;
}

const MovieRec = ({ moviesRec }: MovieRecProps) => {
  // scroll to top smoothly
  useEffect(() => {
    scrollToTop();
  }, [moviesRec]);

  // no movies
  if (!moviesRec || !moviesRec.results || moviesRec.results.length === 0) {
    return (
      <Box mt={8} mb={20} textAlign="center">
        <Typography variant="h6" width="100%">
          <strong>Recommended Movies</strong>
        </Typography>
        <Typography variant="body1" mt={5} color="#777">
          <strong>No recommended movies available 😞</strong>
        </Typography>
      </Box>
    );
  }

  // limited movies to only 6
  const limitedRec = moviesRec.results.slice(0, 6);

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
