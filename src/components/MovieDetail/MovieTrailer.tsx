import { BsPlayCircle, BsXCircle } from "react-icons/bs";
import { Trailer } from "../../hooks/useTrailerById";

interface MovieTrailerProps {
  trailers: Trailer[];
}

const MovieTrailer = ({ trailers }: MovieTrailerProps) => {
  const trailerVideo = trailers.find((trailer) => trailer.type === "Trailer");

  const playTrailer = () => {
    if (trailerVideo) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerVideo.key}`;
      window.open(youtubeUrl, "_blank");
    }
  };

  return (
    <button className="play-button" onClick={playTrailer}>
      {trailerVideo ? (
        <BsPlayCircle size={63} />
      ) : (
        <BsXCircle size={63} /> //  X icon when no trailer is available
      )}
    </button>
  );
};

export default MovieTrailer;
