import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface TitleText {
  text: string;
}

interface Movie {
  id: string;
  titleText: TitleText;
}

interface FetchMoviesResponse {
  entries: number;
  results: Movie[];
}
const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchMoviesResponse>("/titles", { signal: controller.signal })
      .then((res) => {
        if (res.data && res.data.results) {
          setMovies(res.data.results);
          console.log(res.data);
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(`There was an error ${error}`);
      });
    return () => controller.abort();
  }, []);
  return { movies, error };
};

export default useMovies;
