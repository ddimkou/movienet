import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import MovieDetail from "./components/MovieDetail";
import SearchFeed from "./components/SearchFeed";
import Footer from "./components/Footer";

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
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
