import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import MovieDetail from "./components/MovieDetail";
import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        Navbar
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
