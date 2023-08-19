import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.titleText.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieGrid;
