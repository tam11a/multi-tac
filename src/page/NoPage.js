import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SVG from "../assets/oops-404.svg";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <Stack
        direction={"column"}
        alignItems="center"
        minHeight={"100vh"}
        justifyContent={"center"}
        spacing={2}
      >
        <Box sx={{ "& img": { width: "90vw", maxWidth: "500px" }, mb: 3 }}>
          <img src={SVG} />
        </Box>
        <Typography variant="h4">No Page Found</Typography>
        <Button startIcon={<AiOutlineLink />} component={Link} to="/">
          Go To Home Page
        </Button>
      </Stack>
    </>
  );
};

export default NoPage;
