import { Box, Button } from "@mui/material";

interface MovieImageProps {
  imageUrl: string;
  homepage: string;
}

const MovieImage = ({ imageUrl, homepage }: MovieImageProps) => {
  return (
    <Box
      className="details-image"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img src={imageUrl} alt="Movie Poster" />
      <a href={homepage} target="_blank" rel="noopener noreferrer">
        <Button className="official-site-link">Official site</Button>
      </a>
    </Box>
  );
};

export default MovieImage;
