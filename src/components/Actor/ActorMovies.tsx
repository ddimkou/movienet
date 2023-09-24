// import React from "react";
// import MovieCard from "../MovieCard";

// interface ActorMoviesProps {
//   movieActor: {
//     cast: {
//       backdrop_path: string;
//       id: number;
//       title: string;
//     }[];
//   } | null;
// }

// const ActorMovies = ({ movieActor }: ActorMoviesProps) => {
//   const limitedMovies = movieActor?.cast.slice(0, 6);

//   return (
//     <div>
//       <ul>
//         {limitedMovies?.map((movie, index) => (
//           <li key={index}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ActorMovies;

// Import the MovieCard component

import { Box, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

interface ActorMoviesProps {
  movieActor: {
    cast: {
      backdrop_path: string;
      id: number;
      title: string;
      vote_average: number;
    }[];
  } | null;
}

const ActorMovies = ({ movieActor }: ActorMoviesProps) => {
  //   sort vote_average from higher score to lower
  const sortMoviesByVote = [...(movieActor?.cast || [])].sort(
    (a, b) => b.vote_average - a.vote_average
  );

  //   slice to show only 6 movies
  const limitedMovies = sortMoviesByVote.slice(0, 6);

  // MovieCard comp has different data(interface income) changed to fit
  const transformedMovies = limitedMovies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.backdrop_path,
    name: "",
    vote_average: movie.vote_average,
  }));

  return (
    <Box mt={15} mb={20}>
      <Typography
        variant="h6"
        textAlign="center"
        width="100%"
        className="underline"
      >
        <strong>Top Actor's Films</strong>
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        mt={5}
        gap={3}
      >
        {transformedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default ActorMovies;
