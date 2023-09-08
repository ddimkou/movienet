import { useParams } from "react-router-dom";
import useDetailsById from "../hooks/useDetailsById";
import noImage from "../assets/Image_not_available.png";
import { Button, Stack, Typography } from "@mui/material";

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
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            margin={3}
            minHeight="70vh"
            alignItems="center"
          >
            <Stack className="details-image" display="flex" alignItems="center">
              <img src={imageUrl} alt={details.original_title} />
              <a href={details.homepage}>
                <Button className="official-site-link">Official site</Button>
              </a>
            </Stack>
            <Stack className="details-info">
              <Typography variant="h4">{details.original_title}</Typography>
              <Typography variant="h6">{details.tagline}</Typography>
              <Stack className="other-information">
                <Typography variant="body1">
                  <strong>Date:</strong> {formattedReleaseDate}
                </Typography>
                <Typography variant="body1">
                  <strong>Vote Average:</strong>{" "}
                  {details.vote_average.toFixed(2)}
                </Typography>
                <Typography variant="body1">
                  <strong>Status:</strong> {details.status}
                </Typography>
                <Typography variant="body1">
                  <strong>Runtime:</strong> {details.runtime} minutes
                </Typography>
                <Typography variant="body1">
                  <strong>Overview:</strong> {details.overview}
                </Typography>
                <Typography variant="body1">
                  <strong>Budget:</strong> {formatBudget(details.budget)}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )
      )}
    </div>
  );
};

export default MovieDetail;
