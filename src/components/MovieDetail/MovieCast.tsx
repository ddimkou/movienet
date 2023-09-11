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
    return <div>No cast information available.</div>;
  }

  const displayedActors = actors.cast.slice(0, 5);

  return (
    <Box mt={3} textAlign="center">
      <Typography variant="h6" gutterBottom>
        <strong>Top Cast</strong>
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {displayedActors.map((actor, index) => (
          <Box key={index} width="150px" textAlign="center">
            <Avatar
              alt={actor.name}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              sx={{ width: 80, height: 80, margin: "0 auto" }}
            />
            <Typography variant="subtitle2">{actor.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieCast;
