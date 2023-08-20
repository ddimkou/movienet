import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia component="img" height="300" image={movie.primaryImage?.url} />
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Typography>{movie?.titleText?.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
