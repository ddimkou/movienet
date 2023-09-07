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
      mt={5}
      sx={{
        width: "100%",
        height: "15em",
        backgroundColor: "#272829",
      }}
    >
      <img src={TmdbLogo} alt="The Movie DB" width="35%" />

      <Typography
        marginTop="2em"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "0.7rem",
            sm: "1rem",
          },
        }}
      >
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </Typography>
    </Stack>
  );
};

export default Footer;
