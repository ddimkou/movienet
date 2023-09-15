import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Results {
  title: string;
  id: number;
  poster_path: string;
  name: string;
  vote_average: number;
}
interface MovieRec {
  results: Results;
}

const useRecommendation = (id: number) => {
  const [moviesRec, setMoviesRec] = useState<MovieRec | null>();
  const [moviesRecError, setMoviesRecError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<MovieRec>(`/movie/${id}/recommendations?language=en-US&page=1`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) {
          setMoviesRec(res.data);
        } else {
          setMoviesRecError("Not any recommented movie found");
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setMoviesRecError(error.message);
      });
    return () => controller.abort();
  }, [id]);

  return { moviesRec, moviesRecError };
};

export default useRecommendation;
