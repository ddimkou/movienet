import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Movie } from "../hooks/useMovies";
import fetchRating from "../hooks/fetchRating";
import { useEffect, useState } from "react";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovieRating = async () => {
      const fetchedRating = await fetchRating(movie.id);
      setRating(fetchedRating);
    };

    fetchMovieRating();
  }, [movie.id]);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: "4%",
      }}
    >
      <CardMedia component="img" height="300" image={movie.primaryImage?.url} />
      <CardContent sx={{ backgroundColor: "#FFF6E0", height: "106px" }}>
        <Typography variant="h5">{movie?.titleText?.text}</Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ pt: "1em" }}
        >
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
      </CardContent>
    </Card>
  );
};

export default MovieCard;
