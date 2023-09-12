import { Box, Stack, Typography } from "@mui/material";
import CircleRating from "./CircleRating";
import MovieTrailer from "./MovieTrailer";
import { Trailer } from "../../hooks/useTrailerById";

interface MovieInfoProps {
  details: {
    original_title: string;
    vote_average: number;
    tagline: string;
    genres: { name: string }[];
    overview: string;
    status: string;
    runtime: number;
  };
  formattedReleaseDate: string | null;
  trailers: Trailer[];
}

const MovieInfo = ({
  details,
  formattedReleaseDate,
  trailers,
}: MovieInfoProps) => {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems={{ xs: "center", md: "flex-start" }}
      ml={3}
      mr={3}
      sx={{
        maxWidth: { xs: "100%", md: "650px" },
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            textTransform: "uppercase",
          }}
        >
          {details.original_title}
        </Typography>
        <Typography
          fontSize={12}
          mb={2}
          fontWeight="bold"
          sx={{
            fontStyle: "italic",
            textTransform: "uppercase",
          }}
        >
          {details.tagline}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <CircleRating rating={+details.vote_average.toFixed(1)} />
        <MovieTrailer trailers={trailers} />
      </Box>
      <Box mt={3} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {details.genres.map((genre, index) => (
          <Typography
            key={index}
            style={{
              backgroundColor: "#888",
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            {genre.name}
          </Typography>
        ))}
      </Box>
      <Box className="details-info" mt={4}>
        <Typography variant="body1" className="overview">
          <strong>Overview:</strong>
        </Typography>
        <Typography sx={{ fontSize: "15px", letterSpacing: "0.1px" }}>
          {details.overview}
        </Typography>
        <Box
          className="other-information"
          display="flex"
          justifyContent="space-around"
          mt={3}
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
  );
};

export default MovieInfo;
