import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import MoviesDisplay from "./MoviesDisplay";

const Feed = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Create a Genre object from the selectedGenre string
  const genreFilter = selectedGenre ? { genre: selectedGenre } : null;

  // Call the hook with the genreFilter object
  const { genreSearch } = useMoviesByGenre(genreFilter);

  return (
    <Stack direction={{ xs: "column", md: "row" }} height="auto">
      <Box
        sx={{
          borderRight: "1px solid #FFF6E0",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </Box>
      <Box p={2} sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {selectedGenre && genreSearch.length > 0 ? (
          <MoviesDisplay movies={genreSearch} /> // Pass genreSearch array to MoviesDisplay
        ) : (
          <Typography variant="h6">Select a genre to see movies</Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
