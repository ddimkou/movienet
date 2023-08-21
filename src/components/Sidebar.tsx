// import { Box, Stack } from "@mui/material";
// import useGenres from "../hooks/useGenres";

// const Sidebar = () => {
//   const { genres, error } = useGenres();
//   return (
//     <Stack
//       className="sidebar"
//       sx={{
//         position: "sticky",
//         top: 0,
//         zIndex: 1,
//         overflowY: "auto",
//         textAlign: "center",
//         height: { sx: "auto", md: "100vh" },
//         flexDirection: {
//           xs: "row",
//           md: "column",
//         },
//         justifyContent: {
//           xs: "flex-start",
//           md: "center",
//         },
//         alignItems: {
//           xs: "center",
//           md: "center",
//         },
//       }}
//     >
//       {genres.map((genre, index) => (
//         <div key={index}>{genre}</div>
//       ))}
//       {error && <Box>{error}</Box>}
//     </Stack>
//   );
// };

// export default Sidebar;

import { Box, Stack } from "@mui/material";
import genres from "../services/genres";

const Sidebar = () => {
  return (
    <Stack
      className="sidebar"
      minWidth="10em"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        overflowY: "auto",
        textAlign: "center",
        height: { sx: "auto", md: "100vh" },
        flexDirection: {
          xs: "row",
          md: "column",
        },
        justifyContent: {
          xs: "flex-start",
          md: "center",
        },
        alignItems: {
          xs: "center",
          md: "center",
        },
      }}
    >
      {genres.map((genre, index) => (
        <Box className="genre-box" key={index}>
          {genre}
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
