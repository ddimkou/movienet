import { Stack } from "@mui/material";
import genres from "../services/genres";
const Sidebar = () => {
  return (
    <Stack
      className="sidebar"
      minWidth="10em"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        overflowY: "auto",
        textAlign: "center",
        height: { sx: "auto", md: "100vh" },
        flexDirection: {
          xs: "row",
          md: "column",
        },
        justifyContent: {
          xs: "flex-start",
          md: "center",
        },
        alignItems: {
          xs: "center",
          md: "center",
        },
      }}
    >
      {genres.map((genre) => (
        // <div key={genre.id}>{genre.name}</div>
        <button className="genre-btn btn" key={genre.id}>
          {genre.name}
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
