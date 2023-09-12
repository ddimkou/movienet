import { Trailer } from "../../hooks/useTrailerById";

interface MovieTeasersProps {
  trailers: Trailer[];
}

const MovieTeasers = ({ trailers }: MovieTeasersProps) => {
  return (
    <div>
      {trailers.map((trailer) => (
        <div key={trailer.id}>Trailer Key: {trailer.key}</div>
      ))}
    </div>
  );
};

export default MovieTeasers;
