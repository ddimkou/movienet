import { useParams } from "react-router-dom";
import useDetailsById from "../hooks/useDetailsById";
import noImage from "../assets/Image_not_available.png";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { details, error } = useDetailsById(Number(id));

  const imageUrl = details?.poster_path
    ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
    : noImage;

  // Change Format
  const formattedReleaseDate = details
    ? new Date(details.release_date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : null;
  const formatBudget = (budget: number) => {
    return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "$";
  };
  return (
    <div>
      {error ? (
        <div className="error-message-id">
          <p>(Error 404)😞</p>
          <p> Information about this movie was not found.</p>
        </div>
      ) : (
        details && (
          <div className="movie-details">
            <div className="details-image">
              <img src={imageUrl} alt={details.original_title} />
              <a href={details.homepage}>
                <button className="official-site-link">Official site</button>
              </a>
            </div>

            <div className="details-info">
              <h1>{details.original_title}</h1>
              <h3>{details.tagline}</h3>
              <div className="other-information">
                <p>
                  <strong>Date:</strong> {formattedReleaseDate}
                </p>
                <p>
                  <strong>Vote Average:</strong>{" "}
                  {details.vote_average.toFixed(2)}
                </p>
                <p>
                  <strong>Status:</strong> {details.status}
                </p>
                <p>
                  <strong>Runtime:</strong> {details.runtime} minutes
                </p>
                <p>
                  <strong>Overview:</strong> {details.overview}
                </p>
                <p>
                  <strong>Budget:</strong> {formatBudget(details.budget)}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MovieDetail;
