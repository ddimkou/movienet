// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// interface Genre {
//   genre: string;
// }

// interface Movie {
//   id: string;
//   titleText: {
//     text: string;
//   };
//   primaryImage: {
//     url: string;
//   };
//   releaseYear: {
//     year: number;
//   };
// }

// const useMoviesByGenre = (genre: Genre | null) => {
//   const [genreSearch, setGenreSearch] = useState<Movie[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (genre) {
//       const controller = new AbortController();
//       const fetchMoviesByGenre = async () => {
//         try {
//           const response = await apiClient.get("/titles", {
//             params: {
//               genre: genre,
//               info: "base_info",
//               limit: 10,
//               page: 1,
//               sort: "year.incr",
//             },
//             signal: controller.signal,
//           });

//           if (response.data) {
//             console.log(`Movies about ${genre.genre} genre:`, response.data);
//             setGenreSearch(response.data.results);
//           }
//         } catch (error) {
//           if (error instanceof CanceledError) return;
//           setError(`Error fetching movies: ${error}`);
//         }
//       };

//       fetchMoviesByGenre();

//       return () => controller.abort();
//     }
//   }, [genre]);

//   return { genreSearch, error };
// };

// export default useMoviesByGenre;

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  genre: string;
}

interface Movie {
  id: string;
  titleText: {
    text: string;
  };
  primaryImage: {
    url: string;
  };
  releaseYear: {
    year: number;
  };
}

const useMoviesByGenre = (genre: Genre | null) => {
  const [genreSearch, setGenreSearch] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (genre) {
      const controller = new AbortController();
      const fetchMoviesByGenre = async () => {
        try {
          const response = await apiClient.get("/titles", {
            params: {
              genre: genre.genre,
              info: "base_info",
              limit: 10,
              page: 1,
              sort: "year.incr",
            },
            signal: controller.signal,
          });

          if (response.data) {
            console.log(`Movies about ${genre.genre} genre:`, response.data);
            setGenreSearch(response.data.results);
          }
        } catch (error) {
          if (error instanceof CanceledError) return;
          setError(`Error fetching movies: ${error}`);
        }
      };

      fetchMoviesByGenre();

      return () => controller.abort();
    }
  }, [genre && genre.genre]);

  return { genreSearch, error };
};

export default useMoviesByGenre;
