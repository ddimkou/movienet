import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (e.type === "click" || (e as React.KeyboardEvent).key === "Enter") {
      e.preventDefault();

      console.log(inputValue);
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
