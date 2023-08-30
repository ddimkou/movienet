// import { Stack } from "@mui/material";
// import genres from "../services/genres";
// const Sidebar = () => {
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
//       <button className=" genre-btn btn" key="popular">
//         Popular
//       </button>
//       {genres.map((genre) => (
//         // <div key={genre.id}>{genre.name}</div>
//         <button className="genre-btn btn" key={genre.id}>
//           {genre.name}
//         </button>
//       ))}
//     </Stack>
//   );
// };

// export default Sidebar;
// import { Stack } from "@mui/material";
// import genres from "../services/genres";
// const Sidebar = () => {
//   const handleSelectedOption = (genreId?: number | string) => {
//     // You should fetch and display movies based on the selected genre here
//     console.log(`Fetching and displaying movies for genre with ID: ${genreId}`);
//   };

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
//       <button
//         className="genre-btn btn"
//         key="popular"
//         onClick={() => handleSelectedOption("popular")}
//       >
//         Popular
//       </button>
//       {genres.map((genre) => (
//         <button
//           className="genre-btn btn"
//           key={genre.id}
//           onClick={() => handleSelectedOption(genre.id)}
//         >
//           {genre.name}
//         </button>
//       ))}
//     </Stack>
//   );
// };

// export default Sidebar;

// Sidebar.tsximport { Stack } from "@mui/material";
import { Stack } from "@mui/material";
import genres from "../services/genres";
interface SidebarProps {
  selectedOption: string | number | undefined;
  onSelectOption: (option?: string | number) => void;
}

const Sidebar = ({ selectedOption, onSelectOption }: SidebarProps) => {
  const handleSelectedOption = (option?: string | number) => {
    onSelectOption(option);
  };

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
      <button
        className={`genre-btn btn${
          selectedOption === "popular" ? " selected" : ""
        }`}
        key="popular"
        onClick={() => handleSelectedOption("popular")}
      >
        Popular
      </button>
      {genres.map((genre) => (
        <button
          className={`genre-btn btn${
            selectedOption === genre.id ? " selected" : ""
          }`}
          key={genre.id}
          onClick={() => handleSelectedOption(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
