import { Box } from "@mui/material";
import useActorsInfo from "../hooks/useActorsInfo";
import { useParams } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();
  const { actorInfo } = useActorsInfo(Number(id));

  return <Box>{actorInfo?.name}</Box>;
};

export default Actor;
