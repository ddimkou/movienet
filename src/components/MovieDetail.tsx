// import { useParams } from "react-router-dom";
// import useDetailsById from "../hooks/useDetailsById";
// import noImage from "../assets/Image_not_available.png";
// import { Box, Button, Stack, Typography } from "@mui/material";

// const MovieDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const { details, error } = useDetailsById(Number(id));

//   const imageUrl = details?.poster_path
//     ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
//     : noImage;

//   // Change Format
//   const formattedReleaseDate = details
//     ? new Date(details.release_date).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "2-digit",
//       })
//     : null;
//   const formatBudget = (budget: number) => {
//     return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "$";
//   };
//   return (
//     <div>
//       {error ? (
//         <div className="error-message-id">
//           <p>(Error 404)😞</p>
//           <p> Information about this movie was not found.</p>
//         </div>
//       ) : (
//         details && (
//           <Stack
//             spacing={3}
//             margin={3}
//             minHeight="70vh"
//             // maxWidth="50%"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center" // Center vertically
//             alignItems="center" // Center horizontally
//           >
//             <Box display="flex" flexDirection="column" alignItems="center">
//               <Typography
//                 variant="h4"
//                 fontWeight="bold"
//                 sx={{
//                   textTransform: "uppercase",
//                   textShadow: "0.4px 0.5px 0.6px rgba(255, 153, 0, 0.55)",
//                 }}
//               >
//                 {details.original_title}
//               </Typography>
//               <Typography
//                 fontSize={14}
//                 fontWeight="bold"
//                 sx={{
//                   fontStyle: "italic",
//                   textTransform: "uppercase",
//                   textShadow: "0.2px 0.2px 0.6px rgba(255, 153, 0, 0.55)",
//                 }}
//               >
//                 {details.tagline}
//               </Typography>
//             </Box>
//             <Box
//               className="details-image"
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//             >
//               <img src={imageUrl} alt={details.original_title} />
//               <a href={details.homepage}>
//                 <Button className="official-site-link">Official site</Button>
//               </a>
//             </Box>
//             <Box className="details-info">
//               <Typography variant="body1" className="overview">
//                 <strong>Overview:</strong> {details.overview}
//               </Typography>
//               <Box className="other-information">
//                 <Typography variant="body1">
//                   <strong>Date:</strong> {formattedReleaseDate}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Vote Average:</strong>{" "}
//                   {details.vote_average.toFixed(2)}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Status:</strong> {details.status}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Runtime:</strong> {details.runtime} minutes
//                 </Typography>

//                 <Typography variant="body1">
//                   <strong>Budget:</strong> {formatBudget(details.budget)}
//                 </Typography>
//               </Box>
//             </Box>
//           </Stack>
//         )
//       )}
//     </div>
//   );
// };

// export default MovieDetail;

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
              <a href={details.homepage}>
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
              <Box mb={5}>
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

              <Box className="details-info">
                <Typography variant="body1" className="overview">
                  <strong>Overview:</strong> {details.overview}
                </Typography>
                <Box className="other-information">
                  <Typography variant="body1">
                    <strong>Date:</strong> {formattedReleaseDate}
                  </Typography>
                  {/* <Typography variant="body1">
                    <strong>Vote Average:</strong>{" "}
                    {details.vote_average.toFixed(2)}
                  </Typography> */}
                  <Typography variant="body1">
                    <strong>Status:</strong> {details.status}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Runtime:</strong> {details.runtime} minutes
                  </Typography>

                  <Typography variant="body1">
                    <strong>Budget:</strong> {formatBudget(details.budget)}
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
