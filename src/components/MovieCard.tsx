// import { Card, CardMedia } from "@mui/material";
// import { Movie } from "../hooks/useMovies";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

// interface Props {
//   movie: Movie;
// }
// const MovieCard = ({ movie }: Props) => {
//   const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

//   return (
//     <Link to={`/movie/${movie.id}`}>
//       <Card className="movie-card" sx={{ backgroundColor: "#272829" }}>
//         <CardMedia
//           component="img"
//           height="400px"
//           width="300px"
//           image={imageUrl}
//           alt={movie.title}
//         />

//         <div className="overlay">
//           <Typography color="white" variant="h6" textAlign="center" p={1}>
//             {movie.title}
//           </Typography>
//         </div>
//       </Card>
//     </Link>
//   );
// };

// export default MovieCard;

import { Card, CardMedia } from "@mui/material";
import { Movie } from "../hooks/useMovies";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import noImage from "../assets/Image_not_available.png";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  // const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : noImage;

  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="movie-card" sx={{ backgroundColor: "#272829" }}>
        <CardMedia
          component="img"
          height="400px"
          width="300px"
          image={imageUrl}
          alt={movie.title}
          sx={{ objectFit: movie.poster_path ? "cover" : "contain" }}
        />

        <div className="overlay">
          <Typography color="white" variant="h6" textAlign="center" p={1}>
            {movie.title}
          </Typography>
        </div>
      </Card>
    </Link>
  );
};

export default MovieCard;
