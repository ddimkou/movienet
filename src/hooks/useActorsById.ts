import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Cast {
  name: string;
  profile_path: string;
}
export interface Actors {
  cast: Cast[];
}

const useActorsById = (id: number) => {
  const [actors, setActors] = useState<Actors | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Actors>(`/movie/${id}?language=en-US`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) {
          setActors(res.data);
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

  return { actors, error };
};

export default useActorsById;
