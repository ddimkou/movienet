// import { Stack } from "@mui/material";
// import useMovies from "../hooks/useMovies";
// import MovieCard from "./MovieCard";

// const MovieGrid = () => {
//   const { movies, error } = useMovies();

//   return (
//     <Stack
//       direction="row"
//       flexWrap="wrap"
//       justifyContent="center"
//       alignItems="center"
//       gap={3}
//       pt={8}
//     >
//       {error ? (
//         <div>Error: {error}</div>
//       ) : (
//         movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
//       )}
//     </Stack>
//   );
// };

// export default MovieGrid;

import { Stack } from "@mui/material";

import MovieCard from "./MovieCard";

const MovieGrid = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={3}
      pt={8}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Stack>
  );
};

export default MovieGrid;
