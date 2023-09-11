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
  const [actors, setActors] = useState<Actors | null>({ cast: [] });
  const [actorsError, setActorsError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Actors>(`/movie/${id}/credits`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) {
          setActors(res.data);
        } else {
          setActorsError("No movie details found");
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setActorsError(error.message);
      });
    return () => controller.abort();
  }, [id]);

  return { actors, actorsError };
};

export default useActorsById;
