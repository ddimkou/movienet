// import React from "react";

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

// interface MoviesDisplayProps {
//   movies: Movie[];
// }

// const MoviesDisplay: React.FC<MoviesDisplayProps> = ({ movies }) => {
//   const movieNames = movies.map((movie) => movie.titleText.text);

//   return (
//     <div>
//       {movieNames.map((name, index) => (
//         <p key={index}>{name}</p>
//       ))}
//     </div>
//   );
// };

// export default MoviesDisplay;
