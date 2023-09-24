// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// interface Cast {
//   backdrop_path: string;
//   id: number;
//   title: string;
// }
// interface MovieActorFetch {
//   cast: Cast[];
// }
// const useMovieByActor = (id: number) => {
//   const [movieActor, setMovieActor] = useState<MovieActorFetch | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     apiClient
//       .get<MovieActorFetch>(`/person/${id}/movie_credits`, {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         if (res.data) {
//           setMovieActor(res.data);
//         } else {
//           setError("No movie details found");
//         }
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//       });
//     return () => controller.abort();
//   }, [id]);

//   return { movieActor, error };
// };

// export default useMovieByActor;
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Cast {
  backdrop_path: string;
  id: number;
  title: string;
  vote_average: number;
}
interface MovieActorFetch {
  cast: Cast[];
}
const useMovieByActor = (id: number) => {
  const [movieActor, setMovieActor] = useState<MovieActorFetch | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<MovieActorFetch>(`/person/${id}/movie_credits`, {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) {
          setMovieActor(res.data);
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

  return { movieActor, error };
};

export default useMovieByActor;
