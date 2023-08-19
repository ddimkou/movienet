import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import MovieGrid from "./MovieGrid";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92.8vh" },
          borderRight: "1px solid #4d4d4d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "orange" }}
        >
          Copyright 2023 ddimkou
        </Typography>
      </Box>
      <Box>
        <MovieGrid />
      </Box>
    </Stack>
  );
};

export default Feed;
