import { Card, CardMedia } from "@mui/material";
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

      <div className="overlay">
        <Typography color="white" variant="h6" textAlign="center" p={1}>
          {movie.title}
        </Typography>
      </div>
    </Card>
  );
};

export default MovieCard;
