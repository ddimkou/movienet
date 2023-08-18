import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
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
      <input className="search-bar" placeholder="Search" />
      <IconButton type="submit" sx={{ p: "10px", color: "orange" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
