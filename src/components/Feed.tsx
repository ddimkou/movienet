import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import MovieGrid from "./MovieGrid";

const Feed = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} height="auto">
      <Box
        sx={{
          borderRight: "1px solid #FFF6E0",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar />
      </Box>
      <Box p={2} sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <MovieGrid />
      </Box>
    </Stack>
  );
};

export default Feed;
