import { Box, Card, CardMedia } from "@mui/material";
import { Movie } from "../hooks/useMovies";
import Typography from "@mui/material/Typography";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Card className="movie-card" sx={{ backgroundColor: "#272829" }}>
      <CardMedia
        component="img"
        height="400px"
        width="300px"
        image={imageUrl}
        alt={movie.title}
      />
      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Typography
          color="white"
          variant="body2"
          textAlign="center"
          bgcolor="rgba(0, 0, 0, 0.6)"
          p={1}
        >
          {movie.vote_average}
        </Typography>
      </Box>
      <div className="overlay">
        <Typography color="white" variant="h6" textAlign="center">
          {movie.title}
        </Typography>
      </div>
    </Card>
  );
};

export default MovieCard;
