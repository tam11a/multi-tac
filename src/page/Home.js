import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import ProfileDrawer from "../component/ProfileDrawer";

const Home = () => {
  const [drawer, setDrawer] = React.useState(false);
  return (
    <>
      <IconButton
        color="primary"
        sx={{
          fontSize: "1.7rem",
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
        onClick={() => setDrawer(true)}
      >
        <FiUser />
      </IconButton>
      <Stack
        direction={"column"}
        alignItems={"center"}
        minHeight={"100vh"}
        width={"90%"}
        maxWidth={"500px"}
        justifyContent={"center"}
        mx={"auto"}
        spacing={2}
      >
        <Button startIcon={<IoCreateOutline />}>host new game</Button>
        <Typography variant="caption" textAlign={"center"}>
          Create a new game. Share the Room URL or Room ID from the game with
          your friend to invite and permit them to join. Two person can join in
          a game room only.
        </Typography>
        <Button startIcon={<AiOutlineLink />}>join a game</Button>
        <Typography variant="caption" textAlign={"center"}>
          Join with an existing Room ID from anyone invited you to join.
        </Typography>
      </Stack>
      <ProfileDrawer drawer={drawer} setDrawer={setDrawer} />
    </>
  );
};

export default Home;
