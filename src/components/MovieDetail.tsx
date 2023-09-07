import { useParams } from "react-router-dom";
import useDetailsById from "../hooks/useDetailsById";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { details, error } = useDetailsById(Number(id));

  console.log("MovieDetail component details:", details);
  console.log("MovieDetail component error:", error);

  if (details === null) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const imageUrl = details.poster_path
    ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
    : "/placeholder-image.jpg"; // Use a placeholder image URL or provide a default image

  return (
    <div>
      <h1>{details.original_title}</h1>
      <img src={imageUrl} alt={details.original_title} />
      {/* Display other movie details here */}
    </div>
  );
};

export default MovieDetail;
