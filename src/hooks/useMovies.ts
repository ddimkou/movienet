import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
interface FetchMoviesResponse {
  results: Movie[];
}

const useMovies = (endpoint: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchMoviesResponse>(endpoint, { signal: controller.signal })
      .then((res) => setMovies(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, [endpoint]);

  return { movies, error };
};

export default useMovies;
