import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
// import MovieGrid from "./MovieGrid";
import { useState } from "react";
// import Test from "./Test";

const Feed = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  // const [moviesDisplay, setMoviesDisplay] = useState([]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      height="auto"
      // overflow="hidden"
    >
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
        {/* <Test></Test> */}
      </Box>
      <Box
        p={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          // overflowY: "scroll",
          flex: 1,
        }}
      >
        {/* <MovieGrid /> */}
      </Box>
    </Stack>
  );
};

export default Feed;
