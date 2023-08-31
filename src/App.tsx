import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import MovieDetail from "./components/MovieDetail";
import SearchFeed from "./components/SearchFeed";
import { useState } from "react";
import { Movie } from "./hooks/useMovies";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState<Movie[]>([]);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#D8D9DA", minHeight: "100vh" }}>
        <Navbar
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSearchData={setSearchData}
        />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed searchData={searchData} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
