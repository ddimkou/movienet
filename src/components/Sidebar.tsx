import { Stack } from "@mui/material";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "none",
        textAlign: "center",
        py: "2em",
        height: { sx: "auto", md: "95%" },
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Stack>
  );
};

export default Sidebar;
