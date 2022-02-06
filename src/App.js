import { Box } from "@mui/material";
import React from "react";
import theme from "./component/theme";
import PageRoute from "./page/pageRoute";

function App() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: theme.palette.background.dark,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          mx: "auto",
          bgcolor: theme.palette.background.main,
          height: "100vh",
          width: "100vw",
          maxWidth: theme.breakpoints.values.md,
          overflow: "hidden",
          boxShadow: "0 0 20px #00000088",
          overflowY: "auto",

          "::-webkit-scrollbar ": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: theme.palette.background.dark,
          },
          "::-webkit-scrollbar-thumb": {
            background: `${theme.palette.background.main}88`,
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: `${theme.palette.background.main}bb`,
          },
        }}
      >
        <PageRoute />
      </Box>
    </Box>
  );
}

export default App;
