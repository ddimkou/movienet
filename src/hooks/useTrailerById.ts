import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Trailer {
  key: string | null;
  id: number | null;
  name: string | null;
  type: string;
}

const useTrailerById = (id: number) => {
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [trailersError, setTrailersError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get(`/movie/${id}/videos`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data.results) {
          setTrailers(res.data.results);
        } else {
          setTrailersError("no movie trailers found");
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setTrailersError(error.message);
      });
    return () => controller.abort();
  }, [id]);

  return { trailers, trailersError };
};

export default useTrailerById;
