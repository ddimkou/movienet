import { Box, Stack, Typography } from "@mui/material";

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
}

const MovieInfo = ({ details, formattedReleaseDate }: MovieInfoProps) => {
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
      <Box mb={2}>
        <Stack display="flex" flexDirection="row">
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
        </Stack>
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
            }}
          >
            {genre.name}
          </Typography>
        ))}
      </Box>
      <Box className="details-info" mt={8}>
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
