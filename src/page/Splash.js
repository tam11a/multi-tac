import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SVG from "../assets/logo.svg";
import { VscDebugStart } from "react-icons/vsc";
import { AiOutlineLink } from "react-icons/ai";
import LoginDrawer from "../component/LoginDrawer";
import RegisterDrawer from "../component/RegisterDrawer";

const Splash = ({ setToken }) => {
  // state
  const [lDrawer, setLDrawer] = React.useState(false);
  const [rDrawer, setRDrawer] = React.useState(false);
  //
  return (
    <>
      <Stack
        direction={"column"}
        alignItems="center"
        minHeight={"100vh"}
        justifyContent={"space-evenly"}
        spacing={2}
      >
        <Box sx={{ "& img": { width: "80vw", maxWidth: "400px" } }}>
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
          <Typography
            variant="subtitle2"
            sx={{ textTransform: "uppercase" }}
            color={"primary"}
          >
            H o s t . I n v i t e . P l a y !
          </Typography>
          <Box sx={{ mb: 2 }}></Box>
        </Stack>
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
        >
          <Button
            variant="contained"
            startIcon={<VscDebugStart />}
            // component={Link}
            sx={{ borderRadius: "100px", px: 3 }}
            // to="/home"
            fullWidth
            onClick={() => setLDrawer(true)}
          >
            Get Started
          </Button>
          <Button
            startIcon={<AiOutlineLink style={{ fontSize: "1rem" }} />}
            // endIcon={<AiOutlineLink style={{ fontSize: "1rem" }} />}
            color="secondary"
            component={"a"}
            target="_blank"
            href="https://www.facebook.com/ibrahimsadik.tamim/"
            sx={{ fontSize: "0.7rem" }}
          >
            Powered By TAM
          </Button>
        </Stack>
      </Stack>
      <LoginDrawer
        drawer={lDrawer}
        setDrawer={setLDrawer}
        toDrawer={setRDrawer}
        setToken={setToken}
      />
      <RegisterDrawer
        drawer={rDrawer}
        setDrawer={setRDrawer}
        toDrawer={setLDrawer}
        setToken={setToken}
      />
    </>
  );
};

export default Splash;
