import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SVG from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";
import { AiOutlineLink } from "react-icons/ai";

const Splash = () => {
  return (
    <>
      <Stack
        direction={"column"}
        alignItems="center"
        minHeight={"100vh"}
        justifyContent={"space-evenly"}
        spacing={2}
      >
        <Box sx={{ "& img": { width: "90vw", maxWidth: "500px" } }}>
          <img src={SVG} alt={SVG} />
        </Box>
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
        >
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Multi Tac
          </Typography>
          <Typography variant="subtitle2" sx={{ textTransform: "uppercase" }}>
            Realtime Multiplayer Game
          </Typography>
          <Box sx={{ mb: 2 }}></Box>
          <Button
            variant="outlined"
            startIcon={<VscDebugStart />}
            component={Link}
            sx={{ borderRadius: "100px" }}
            to="/home"
            fullWidth
          >
            Get Started
          </Button>
        </Stack>
        <Button
          startIcon={<AiOutlineLink style={{ fontSize: "1rem" }} />}
          component={"a"}
          target="_blank"
          href="https://www.facebook.com/ibrahimsadik.tamim/"
          sx={{ fontSize: "0.7rem" }}
        >
          Powered By TAM
        </Button>
      </Stack>
    </>
  );
};

export default Splash;
