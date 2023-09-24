import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { formatDate } from "../../services/dateFormat";
interface ActorInfoProps {
  actorInfo: {
    name?: string;
    birthday: string;
    biography: string;
  } | null;
}

const ActorInfo = ({ actorInfo }: ActorInfoProps) => {
  const [showFullBiography, setShowFullBiography] = useState(false);
  //   show more button

  const toggleBiography = () => {
    setShowFullBiography(!showFullBiography);
  };
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
          {actorInfo?.name}
        </Typography>
        <Typography fontSize={12} mb={2} fontWeight="bold" fontStyle="italic">
          {actorInfo?.birthday ? formatDate(actorInfo.birthday) : null}
        </Typography>
      </Box>

      <Box className="details-info" mt={4}>
        <Typography variant="body1">
          {showFullBiography || (actorInfo?.biography?.length ?? 0) <= 600
            ? actorInfo?.biography // Show full biography
            : `${
                actorInfo?.biography?.slice(0, 600) ?? "Biography not available"
              }...`}
        </Typography>
        {(actorInfo?.biography?.length ?? 0) > 600 && (
          <Button
            variant="text"
            color="primary"
            onClick={toggleBiography}
            sx={{
              textTransform: "none",
              mt: 1,
              textDecoration: "underline",
              color: "#777",
            }}
          >
            {showFullBiography ? "Show Less" : "Show More"}
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default ActorInfo;
