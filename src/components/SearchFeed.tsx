import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import useMoviesSearch from "../hooks/useMoviesSearch";

const SearchFeed = () => {
  const { searchTerm } = useParams<{ searchTerm: string | undefined }>();
  const { searchResults } = useMoviesSearch(searchTerm || "");

  return (
    <Stack direction="column" alignItems="center" pt={8} spacing={3}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          width: "60%",
          borderBottom: "2px solid #ff9800",
        }}
      >
        Search Results for "
        <span style={{ color: "#df8600" }}>{searchTerm}</span>"
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Stack>
    </Stack>
  );
};

export default SearchFeed;
