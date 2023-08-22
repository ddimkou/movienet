import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  genre: string;
}
const useMoviesByGenre = (genre: Genre) => {
  const [genreSearch, setGenreSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchMoviesByGenre = async () => {
      try {
        const response = await apiClient.get("/titles", {
          params: {
            genre: genre,
            info: "base_info",
            limit: 10,
            page: 1,
            // test edo gia to sort
            sort: "year.incr",
          },
          signal: controller.signal,
        });

        if (response.data) {
          setGenreSearch(response.data.results);
          console.log(`Movies about ${genre} genre:`, response.data);
        }
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError(`Error fetching movies: ${error}`);
      }
    };

    fetchMoviesByGenre();

    return () => controller.abort();
  }, [genre]);

  return { genreSearch, error };
};

export default useMoviesByGenre;
