import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Movie } from "../hooks/useMovies";
import useMoviesSearch from "../hooks/useMoviesSearch";
import { useNavigate } from "react-router-dom";

interface inputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  setSearchData: (value: Movie[]) => void;
}
const SearchBar = ({
  inputValue,
  setInputValue,
  setSearchData,
}: inputProps) => {
  const { searchResults } = useMoviesSearch(inputValue);
  const navigate = useNavigate();
  const handleSearch = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (e.type === "click" || (e as React.KeyboardEvent).key === "Enter") {
      e.preventDefault();
      setSearchData(searchResults);
      navigate(`/search/${inputValue}`);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "orange" }}
        onClick={handleSearch}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
