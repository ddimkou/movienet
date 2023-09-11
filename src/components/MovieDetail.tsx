import { useParams } from "react-router-dom";
import useDetailsById from "../hooks/useDetailsById";
import noImage from "../assets/Image_not_available.png";
import { Box, Button, Stack, Typography } from "@mui/material";

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
  // const formatBudget = (budget: number) => {
  //   return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "$";
  // };
  console.log(details?.genres);
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
            display="flex"
            justifyContent="center"
            width="100%"
            mt={3}
            minHeight="65vh"
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {/* left side */}
            <Box
              className="details-image"
              display="flex"
              flexDirection="column"
              alignItems="center"
              ml={2}
            >
              <img src={imageUrl} alt={details.original_title} />
              <a href={details.homepage} target="_blank">
                <Button className="official-site-link">Official site</Button>
              </a>
            </Box>
            {/* right side */}
            <Stack
              display="flex"
              flexDirection="column"
              ml={3}
              mr={3}
              sx={{
                maxWidth: { xs: "100%", md: "650px" },
              }}
            >
              <Box mb={2}>
                <Box display="flex">
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    {details.original_title}
                  </Typography>
                  <Typography>{details.vote_average.toFixed(2)}</Typography>
                </Box>
                <Typography
                  fontSize={12}
                  fontWeight="bold"
                  sx={{
                    fontStyle: "italic",
                    textTransform: "uppercase",
                  }}
                >
                  {details.tagline}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {details.genres.map((genre, index) => (
                  <Typography
                    key={index}
                    style={{
                      backgroundColor: "#888",
                      color: "#fff",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      marginBottom: "4em",
                    }}
                  >
                    {genre.name}
                  </Typography>
                ))}
              </Box>

              <Box className="details-info">
                <Typography variant="body1" className="overview">
                  <strong>Overview:</strong>
                </Typography>
                <Typography variant="body1" sx={{ letterSpacing: "0.1px" }}>
                  {details.overview}
                </Typography>
                <Box
                  className="other-information"
                  display="flex"
                  justifyContent="space-around"
                  mt={6}
                >
                  <Typography variant="body2" style={{ color: "#666" }}>
                    <strong>
                      <span style={{ color: "#000" }}>Date:</span>
                    </strong>{" "}
                    {formattedReleaseDate}
                  </Typography>
                  <Typography variant="body2" style={{ color: "#666" }}>
                    <strong>
                      <span style={{ color: "#000" }}>Status:</span>
                    </strong>{" "}
                    {details.status}
                  </Typography>
                  <Typography variant="body2" style={{ color: "#666" }}>
                    <strong>
                      <span style={{ color: "#000" }}>Runtime:</span>
                    </strong>{" "}
                    {details.runtime} minutes
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        )
      )}
    </div>
  );
};

export default MovieDetail;

// tofix:
// md k lower, to title 8elei mt, to img exei ml gia kapio logo
