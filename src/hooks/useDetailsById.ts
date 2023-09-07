import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres {
  name: string;
}

export interface Details {
  poster_path: string;
  original_title: string;
  vote_average: number;
  tagline: string;
  status: string;
  runtime: number;
  genres: Genres[];
  overview: string;
  release_date: string;
  budget: number;
  homepage: string;
}
const useDetailsById = (id: number) => {
  const [details, setDetails] = useState<Details | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Details>(`/movie/${id}?language=en-US`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) {
          setDetails(res.data);
        } else {
          setError("No movie details found");
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, [id]);

  return { details, error };
};

export default useDetailsById;
