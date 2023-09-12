import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import useDetailsById from "../../hooks/useDetailsById";
import useActorsById from "../..//hooks/useActorsById";
import useTrailerById from "../../hooks/useTrailerById";
import noImage from "../../assets/Image_not_available.png";
import MovieImage from "./MovieImage";
import MovieInfo from "./MovieInfo";
import MovieCast from "./MovieCast";
import MovieTeasers from "./MovieTeasers";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { details, error } = useDetailsById(Number(id));
  const { actors } = useActorsById(Number(id));
  const { trailers } = useTrailerById(Number(id));

  const movieImageUrl = details?.poster_path
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

  return (
    <div>
      {error ? (
        <div className="error-message-id">
          <p>(Error 404)😞</p>
          <p> Information about this movie was not found.</p>
        </div>
      ) : (
        details && (
          <Box>
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
              {/* Left side */}
              <MovieImage
                imageUrl={movieImageUrl}
                homepage={details.homepage}
              />

              {/* Right side */}
              <MovieInfo
                details={details}
                formattedReleaseDate={formattedReleaseDate}
              />
            </Stack>
            <MovieCast actors={actors} />
            <MovieTeasers trailers={trailers} />
          </Box>
        )
      )}
    </div>
  );
};

export default MovieDetail;
