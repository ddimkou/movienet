import { useEffect, useState } from "react";
import { Movie } from "../hooks/useMovies";
import fetchRating from "../hooks/fetchRating";
import { Stack, Typography } from "@mui/material";

interface Props {
  movie: Movie;
}
const MovieDetail = ({ movie }: Props) => {
  const [rating, setRating] = useState<number | null>(null);
  useEffect(() => {
    const fetchMovieRating = async () => {
      const fetchedRating = await fetchRating(movie.id);
      setRating(fetchedRating);
    };

    fetchMovieRating();
  }, [movie.id]);
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ pt: "1em" }}>
      <Typography
        sx={{
          fontWeight: "bold",
        }}
      >
        {movie?.releaseYear?.year}
      </Typography>
      <Typography
        sx={{
          backgroundColor:
            rating !== null
              ? rating > 9
                ? "rgba(0, 255, 0, 0.3)" // green 30%opacity
                : rating >= 7.5
                ? "rgba(255, 165, 0, 0.3)" // orange 30% opacity
                : "rgba(255, 0, 0, 0.3)" // red 30% opacity
              : "transparent",
          display: "inline-block",
          padding: "0.2em 0.5em",
          borderRadius: "4px",
        }}
      >
        {rating !== null ? rating.toFixed(1) : "N/A"}
      </Typography>
    </Stack>
  );
};

export default MovieDetail;
