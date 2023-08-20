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
        borderRadius: "5%",
      }}
    >
      <CardMedia component="img" height="300" image={movie.primaryImage?.url} />
      <CardContent sx={{ backgroundColor: "#FFF6E0", height: "106px" }}>
        <Typography variant="h5">{movie?.titleText?.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
