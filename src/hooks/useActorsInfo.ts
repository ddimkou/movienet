import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface ActorInfo {
  biography: string;
  birthday: string;
  imdb_id: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

const useActorsInfo = (id: number) => {
  const [actorInfo, setActorInfo] = useState<ActorInfo | null>(null);
  const [actorInfoError, setActorInfoError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<ActorInfo>(`/movie/${id}/credits`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) {
          setActorInfo(res.data);
        } else {
          setActorInfoError("No info");
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setActorInfoError(error.message);
      });
    return () => controller.abort();
  }, [id]);

  return { actorInfo, actorInfoError };
};

export default useActorsInfo;
