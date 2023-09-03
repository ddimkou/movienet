import { Stack, Typography } from "@mui/material";
import TmdbLogo from "../assets/tmdb.svg";
const Footer = () => {
  return (
    <Stack
      className="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      sx={{ width: "100%", height: "15em", backgroundColor: "#272829" }}
    >
      <img src={TmdbLogo} alt="The Movie DB" width="30%" />
      <Typography variant="body1" marginTop="2em">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </Typography>
      <Typography variant="body1">
        The Movie Database is a comprehensive and user-friendly platform for
        movies information.
      </Typography>
    </Stack>
  );
};

export default Footer;
