// import { Box, Stack } from "@mui/material";
// import Sidebar from "./Sidebar";
// import MovieGrid from "./MovieGrid";

// const Feed = () => {
//   return (
//     <Stack direction={{ xs: "column", md: "row" }} height="auto">
//       <Box
//         sx={{
//           borderRight: "1px solid #FFF6E0",
//           px: { xs: 0, md: 2 },
//         }}
//       >
//         <Sidebar />
//       </Box>
//       <Box p={2} sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
//         <MovieGrid />
//       </Box>
//     </Stack>
//   );
// };

// export default Feed;

import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import MovieGrid from "./MovieGrid";
import { useState } from "react";

const Feed = () => {
  const [selectedOption, setSelectedOption] = useState<
    string | number | undefined
  >("popular");

  return (
    <Stack direction={{ xs: "column", md: "row" }} height="auto">
      <Box
        sx={{
          borderRight: "1px solid #FFF6E0",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
        />
      </Box>
      <Box p={2} sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <MovieGrid selectedOption={selectedOption} />
      </Box>
    </Stack>
  );
};

export default Feed;
