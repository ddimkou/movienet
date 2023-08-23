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
// import { Stack } from "@mui/material";
// import genres from "../services/genres";
// import useMoviesByGenre from "../hooks/useMoviesByGenre";
// import { useEffect, useState } from "react";

// interface SidebarProps {
//   selectedGenre: string | null;
//   setSelectedGenre: React.Dispatch<React.SetStateAction<string | null>>;
// }

// const Sidebar = ({ selectedGenre, setSelectedGenre }: SidebarProps) => {
//   const { genreSearch } = useMoviesByGenre(selectedGenre);
//   const [clickedGenre, setClickedGenre] = useState<string | null>(null);

//   const handleGenreClick = (genre: string) => {
//     setSelectedGenre(genre);
//     setClickedGenre(genre);
//   };

//   useEffect(() => {
//     if (clickedGenre) {
//       console.log(`Movies of ${clickedGenre} genre:`, genreSearch);
//     }
//   }, [clickedGenre, genreSearch]);

//   return (
//     <Stack
//       className="sidebar"
//       minWidth="10em"
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
//         <button
//           className="genre-btn"
//           key={index}
//           onClick={() => handleGenreClick(genre)}
//         >
//           {genre}
//         </button>
//       ))}
//     </Stack>
//   );
// };

// export default Sidebar;

import { Stack } from "@mui/material";
import genres from "../services/genres";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import { useEffect, useState } from "react";

interface SidebarProps {
  selectedGenre: string | null;
  setSelectedGenre: React.Dispatch<React.SetStateAction<string | null>>;
}

const Sidebar = ({ selectedGenre, setSelectedGenre }: SidebarProps) => {
  const { genreSearch } = useMoviesByGenre(
    selectedGenre ? { genre: selectedGenre } : null
  );
  const [clickedGenre, setClickedGenre] = useState<string | null>(null);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    setClickedGenre(genre);
  };

  useEffect(() => {
    if (clickedGenre) {
      console.log(`Movies of ${clickedGenre} genre:`, genreSearch);
    }
  }, [clickedGenre, genreSearch]);

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
        <button
          className="genre-btn"
          key={index}
          onClick={() => handleGenreClick(genre)}
        >
          {genre}
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
