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

import { Stack, Skeleton } from "@mui/material";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movies, error } = useMovies();
  const isLoading = movies.length === 0 && !error; // Determine loading state

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={3}
      pt={8}
    >
      {isLoading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="circular"
            width={320}
            height={446}
            sx={{ borderRadius: "4%", bgcolor: "grey.600" }}
          />
        ))
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </Stack>
  );
};

export default MovieGrid;
