import { Box, Stack } from "@mui/material";
import useActorsInfo from "../../hooks/useActorsInfo";
import { useParams } from "react-router-dom";
import ActorImage from "./ActorImage";
import ActorInfo from "./ActorInfo";
import ActorMovies from "./ActorMovies";
import useMovieByActor from "../../hooks/useMovieByActor";
const Actor = () => {
  const { id } = useParams();
  const { actorInfo } = useActorsInfo(Number(id));
  const { movieActor } = useMovieByActor(Number(id));

  return (
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
        <ActorImage actorInfo={actorInfo} />
        <ActorInfo actorInfo={actorInfo} />
      </Stack>
      <ActorMovies movieActor={movieActor} />
    </Box>
  );
};

export default Actor;
