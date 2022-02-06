import { Button, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileDrawer from "../component/ProfileDrawer";
import NotificationDrawer from "../component/NotificationDrawer";
import JoinGameDrawer from "../component/JoinGameDrawer";

const Home = () => {
  // state
  const [drawer, setDrawer] = React.useState(false);
  const [nDrawer, setNDrawer] = React.useState(false);
  const [jDrawer, setJDrawer] = React.useState(false);
  // render
  return (
    <>
      <Stack
        direction="row"
        sx={{ position: "absolute", top: "1rem", right: "1rem" }}
        spacing={1}
      >
        <IconButton
          color="primary"
          sx={{
            fontSize: "1.7rem",
          }}
          onClick={() => setNDrawer(true)}
        >
          <IoMdNotificationsOutline />
        </IconButton>
        <IconButton
          color="primary"
          sx={{
            fontSize: "1.7rem",
          }}
          onClick={() => setDrawer(true)}
        >
          <FiUser />
        </IconButton>
      </Stack>
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
        <Button startIcon={<AiOutlineLink />} onClick={() => setJDrawer(true)}>
          join a game
        </Button>
        <Typography variant="caption" textAlign={"center"}>
          Join with an existing Room ID from anyone invited you to join.
        </Typography>
      </Stack>
      <ProfileDrawer drawer={drawer} setDrawer={setDrawer} />
      <NotificationDrawer drawer={nDrawer} setDrawer={setNDrawer} />
      <JoinGameDrawer drawer={jDrawer} setDrawer={setJDrawer} />
    </>
  );
};

export default Home;
