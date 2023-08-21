// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// interface Results {
//   name: string;
// }
// interface Genre {
//   results: (Results | null)[];
// }
// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClient
//       .get("titles/utils/genres")
//       .then((res) => {
//         if (res.data && res.data.results) {
//           setGenres(res.data.results);
//           console.log(res.data);
//         }
//       })
//       .catch((error) => {
//         setError(`There's an error fetching the genres, ${error}`);
//       });
//   }, []);
//   return { genres, error };
// };
// export default useGenres;
// ````````````````````````````````````````````````````````````````
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Results {
  name: string | null;
}
interface Genre {
  results: (Results | null)[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("titles/utils/genres")
      .then((res) => {
        if (res.data && res.data.results) {
          setGenres(res.data.results);
          console.log(res.data);
        }
      })
      .catch((error) => {
        setError(`There's an error fetching the genres, ${error}`);
      });
  }, []);
  return { genres, error };
};
export default useGenres;
