import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import MovieGrid from "./MovieGrid";

const Feed = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      height="100vh"
      overflow="hidden" // Add this to prevent the extra scrollbar
    >
      <Box
        sx={{
          borderRight: "1px solid #4d4d4d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar />
      </Box>
      <Box
        p={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        <MovieGrid />
      </Box>
    </Stack>
  );
};

export default Feed;
