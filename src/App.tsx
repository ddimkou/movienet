import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import SearchFeed from "./components/SearchFeed";
import Footer from "./components/Footer";
import Actor from "./components/Actor/Actor";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#D8D9DA",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/actor/:id" element={<Actor />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
