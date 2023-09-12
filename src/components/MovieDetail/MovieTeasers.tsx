import { Box, Typography } from "@mui/material";
import { Trailer } from "../../hooks/useTrailerById";

interface MovieTeasersProps {
  trailers: Trailer[];
}

const MovieTeasers = ({ trailers }: MovieTeasersProps) => {
  // filter of video is Teaser only
  const teaserTrailers = trailers.filter(
    (trailer) => trailer.type === "Teaser"
  );

  return (
    <Box className="trailers-container" mt={5}>
      <Typography variant="h6" textAlign="center" width="100%">
        <strong>Teasers</strong>
      </Typography>
      {teaserTrailers.slice(0, 3).map((trailer) => (
        <Box key={trailer.id} className="trailer-card" display="flex">
          <iframe
            width="280"
            height="157.5"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer?.name || ""}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="trailer-title">{trailer.name}</div>
        </Box>
      ))}
    </Box>
  );
};

export default MovieTeasers;
