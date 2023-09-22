import { Box, Button } from "@mui/material";
import React from "react";

interface ActorImageProps {
  actorInfo: {
    profile_path?: string;
    name?: string;
    imdb_id?: string;
  } | null;
}
const ActorImage = ({ actorInfo }: ActorImageProps) => {
  return (
    <Box
      className="details-image"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {actorInfo?.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${actorInfo?.profile_path}`}
          alt={`Image of ${actorInfo?.name}`}
        />
      )}
      <a
        href={`https://www.imdb.com/name/${actorInfo?.imdb_id}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="official-site-link">IMDB page</Button>
      </a>
    </Box>
  );
};

export default ActorImage;
