// import React from "react";

// const MovieDetail = () => {
//   return <div>MovieDetail</div>;
// };

// export default MovieDetail;

import React, { useEffect } from "react";
import useMovies from "../hooks/useMovies";

const MovieDetail = () => {
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await useMovies.get("/top_rated");
        console.log("Top Rated Movies:", response.data);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return <div>MovieDetail</div>;
};

export default MovieDetail;
