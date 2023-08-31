// import { Stack, Typography } from "@mui/material";
// import useMovies from "../hooks/useMovies";
// import MovieCard from "./MovieCard";

// interface MovieGridProps {
//   selectedOption: string | number | undefined;
// }
// const MovieGrid = ({ selectedOption }: MovieGridProps) => {
//   const { movies, error } = useMovies(
//     selectedOption === "popular"
//       ? "/movie/popular"
//       : `/discover/movie?with_genres=${selectedOption}`
//   );

//   return (
//     <Stack
//       direction="row"
//       flexWrap="wrap"
//       justifyContent="center"
//       alignItems="center"
//       gap={3}
//       pt={8}
//     >
//       {error ? <Typography>{error}</Typography> : null}
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </Stack>
//   );
// };

// export default MovieGrid;
import { Box, Stack, Typography } from "@mui/material";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";

interface MovieGridProps {
  selectedOption: string | number | undefined;
}

const MovieGrid = ({ selectedOption }: MovieGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, error, totalPages } = useMovies(
    selectedOption === "popular"
      ? "/movie/popular"
      : `/discover/movie?with_genres=${selectedOption}`,
    currentPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  // reset current page on genre switch
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedOption]);

  const displayPageRange = Math.min(15, totalPages);

  return (
    <>
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
      <Box display="flex" justifyContent="center">
        <Pagination
          size="large"
          count={displayPageRange}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ mt: 10, mb: 5 }}
        />{" "}
      </Box>
    </>
  );
};

export default MovieGrid;
