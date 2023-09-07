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
interface FetchDetails {
  results: Details[];
}

const useDetailsById = (id: number) => {
  const [details, setDetails] = useState<Details[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchDetails>(`/movie/${id}?language=en-US`, {
        signal: controller.signal,
      })
      .then((res) => {
        setDetails(res.data.results);
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
