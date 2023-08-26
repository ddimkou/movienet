import { Card, CardContent, CardMedia } from "@mui/material";
import { Movie } from "../hooks/useMovies";
import Typography from "@mui/material/Typography";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Card className="movie-card">
      <CardMedia
        component="img"
        height="400px"
        width="300px"
        image={imageUrl}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {movie.title}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary">
          {movie.overview}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
