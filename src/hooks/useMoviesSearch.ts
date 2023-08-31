import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Movie } from "./useMovies";

interface FetchSearchMoviesResponse {
  results: Movie[];
}

const useMoviesSearch = (searchTerm: string) => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchSearchMoviesResponse>(`/search/movie?query=${searchTerm}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setSearchResults(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, [searchTerm]);

  return { searchResults, error };
};

export default useMoviesSearch;
