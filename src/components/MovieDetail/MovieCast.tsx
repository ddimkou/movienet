import { Avatar, Box, Typography } from "@mui/material";

interface Actor {
  name: string;
  profile_path: string | null;
}

interface MovieCastProps {
  actors: {
    cast: Actor[];
  } | null;
}

const MovieCast = ({ actors }: MovieCastProps) => {
  if (!actors || !actors.cast || actors.cast.length === 0) {
    return (
      <Box textAlign="center">
        {" "}
        <Typography variant="h6" className="underline">
          <strong>Top Cast</strong>
        </Typography>
        <Typography>No cast cast information available 😞</Typography>
      </Box>
    );
  }

  const displayedActors = actors.cast.slice(0, 6);

  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h6" className="underline">
        <strong>Top Cast</strong>
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4}>
        {displayedActors.map((actor, index) => (
          <Box key={index} width="150px" textAlign="center">
            <Avatar
              alt={actor.name}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              sx={{ width: 100, height: 100, margin: "5px auto" }}
            />
            <Typography variant="subtitle2">{actor.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieCast;
