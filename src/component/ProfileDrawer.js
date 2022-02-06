import {
  Divider,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import { MdClose } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const ProfileDrawer = ({ drawer, setDrawer }) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => setDrawer(true)}
      PaperProps={{
        sx: {
          width: "90vw",
          maxWidth: 450,
          background: theme.palette.background.main,
        },
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"flex-start"}
        p={1}
        spacing={2}
      >
        <IconButton
          color="primary"
          component="span"
          onClick={() => setDrawer(false)}
        >
          <MdClose />
        </IconButton>
        <Typography variant="button" flexGrow={1}>
          Profile
        </Typography>
        <IconButton
          color="primary"
          component="span"
          // onClick={() => setDrawer(false)}
        >
          <FiUser />
          {/* <FiSettings /> */}
        </IconButton>
      </Stack>
      <Divider
        sx={{
          borderColor: theme.palette.background.light,
          borderWidth: "1px",
        }}
      />
    </SwipeableDrawer>
  );
};

export default ProfileDrawer;
