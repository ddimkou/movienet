// import { Stack } from "@mui/material";

// const Sidebar = () => {
//   return (
//     <Stack
//       direction="row"
//       sx={{
//         overflowY: "none",
//         textAlign: "center",
//         height: { sx: "auto", md: "100vh" },
//         flexDirection: {
//           md: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         },
//       }}
//     >
//       <div>HORRORHORROR</div>
//       <div>2HORROR</div>
//       <div>3HORRORHORROR</div>
//       <div>4HORRORHORROR</div>
//       <div>5HORROR</div>
//     </Stack>
//   );
// };

// export default Sidebar;

// import { Stack } from "@mui/material";

// const Sidebar = () => {
//   return (
//     <Stack
//       direction="row"
//       sx={{
//         position: "sticky",
//         top: 0,
//         zIndex: 1,
//         overflowY: "none",
//         textAlign: "center",
//         height: { sx: "auto", md: "100vh" },
//         flexDirection: {
//           md: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         },
//       }}
//     >
//       <div>HORRORHORROR</div>
//       <div>2HORROR</div>
//       <div>3HORRORHORROR</div>
//       <div>4HORRORHORROR</div>
//       <div>5HORROR</div>
//     </Stack>
//   );
// };

// export default Sidebar;

import { Stack } from "@mui/material";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
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
      <div>HORRORHORROR</div>
      <div>2HORROR</div>
      <div>3HORRORHORROR</div>
      <div>4HORRORHORROR</div>
      <div>5HORROR</div>
    </Stack>
  );
};

export default Sidebar;
