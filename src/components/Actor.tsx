import { Box, Button, Stack, Typography } from "@mui/material";
import useActorsInfo from "../hooks/useActorsInfo";
import { useParams } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();
  const { actorInfo } = useActorsInfo(Number(id));

  return (
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
      <Box
        className="details-image"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${actorInfo?.profile_path}`}
          alt={`Image of actorInfo?.name`}
        />
        <a
          href={`https://www.imdb.com/name/${actorInfo?.imdb_id}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="official-site-link">IMDB page</Button>
        </a>
      </Box>
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
            {actorInfo?.name}
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
            {actorInfo?.birthday}
          </Typography>
        </Box>

        <Box className="details-info" mt={4}>
          <Typography>{actorInfo?.biography}</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Actor;
