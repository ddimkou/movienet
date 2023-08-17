import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import logo from "../assets/movie.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingX={5}
      paddingY={1}
    >
      <Link to="/">
        <img src={logo} height={55} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
