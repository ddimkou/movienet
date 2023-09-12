import { BsPlayCircle } from "react-icons/bs"; // Import the BsPlayCircle icon

const MovieTrailer = () => {
  return (
    <button className="play-button" onClick={() => console.log("helloworld")}>
      <BsPlayCircle size={63} />
    </button>
  );
};

export default MovieTrailer;
