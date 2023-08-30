// import { Stack, Typography } from "@mui/material";

// import useMovies from "../hooks/useMovies";
// import MovieCard from "./MovieCard";

// const MovieGrid = () => {
//   const { movies, error } = useMovies("/movie/popular"); // Pass the desired endpoint here

//   return (
//     <Stack
//       direction="row"
//       flexWrap="wrap"
//       justifyContent="center"
//       alignItems="center"
//       gap={3}
//       pt={8}
//     >
//       {error && <Typography>{error}</Typography>}
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </Stack>
//   );
// };

// export default MovieGrid;

import { Stack, Typography } from "@mui/material";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  selectedOption: string | number | undefined; // Define the prop type here
}
const MovieGrid = ({ selectedOption }: MovieGridProps) => {
  const { movies, error } = useMovies(
    selectedOption === "popular"
      ? "/movie/popular"
      : `/discover/movie?with_genres=${selectedOption}`
  );

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={3}
      pt={8}
    >
      {error ? <Typography>{error}</Typography> : null}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Stack>
  );
};

export default MovieGrid;
