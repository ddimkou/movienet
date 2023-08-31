import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import logo from "../assets/movie.png";
import { Movie } from "../hooks/useMovies";

interface inputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  setSearchData: (value: Movie[]) => void;
}
const Navbar = ({ inputValue, setInputValue, setSearchData }: inputProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingX={2}
      sx={{ backgroundColor: "#272829" }}
    >
      <Link to="/">
        <img src={logo} height={55} className="logo" />
      </Link>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchData={setSearchData}
      />
    </Stack>
  );
};

export default Navbar;
