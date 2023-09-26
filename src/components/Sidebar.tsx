import { Stack } from "@mui/material";
import genres from "../services/genres";

interface SidebarProps {
  selectedOption: string | number;
  setSelectedOption: (option: string | number) => void;
}
const Sidebar = ({ selectedOption, setSelectedOption }: SidebarProps) => {
  const handleSelectedOption = (option: string | number) => {
    setSelectedOption(option);
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
        marginTop: { xs: "auto", md: "2em" },

        flexDirection: {
          xs: "row",
          md: "column",
        },
        justifyContent: {
          xs: "flex-start",
          md: "start",
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
