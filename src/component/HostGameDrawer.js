import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Stack,
  Drawer,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import { MdClose } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { IoCreateOutline, IoGameControllerOutline } from "react-icons/io5";

const HostGameDrawer = ({ drawer, setDrawer }) => {
  return (
    <Drawer
      anchor="bottom"
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => setDrawer(true)}
      PaperProps={{
        sx: {
          width: "100vw",
          maxWidth: theme.breakpoints.values.md,
          mx: "auto",
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
        <IconButton color="primary" component="span">
          <IoCreateOutline />
        </IconButton>
        <Typography variant="button" flexGrow={1}>
          Host New Game
        </Typography>
        <IconButton
          color="primary"
          component="span"
          onClick={() => setDrawer(false)}
        >
          <MdClose />
        </IconButton>
      </Stack>
      <Divider
        sx={{
          borderColor: theme.palette.background.light,
          borderWidth: "1px",
        }}
      />
      <List>
        <ListItem>
          <Typography variant="body2">
            Create a new game. Share the Room URL or Room ID from the game with
            your friend to invite and permit them to join. Two person can join
            in a game room only.
          </Typography>
        </ListItem>
        <Divider
          sx={{
            borderColor: theme.palette.background.light,
            borderWidth: "1px",
            mt: 3,
          }}
        />
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
            //onClick={() => setDrawer(false)}
          >
            <IoGameControllerOutline />
          </IconButton>
          <Typography variant="button" flexGrow={1}>
            Room Information
          </Typography>
        </Stack>
        <Divider
          sx={{
            borderColor: theme.palette.background.light,
            borderWidth: "1px",
          }}
        />
        <form>
          <ListItem>
            <Stack direction={"column"} width={"100%"}>
              <ListItemText secondary={"Create New Room ID"} />
              <OutlinedInput
                placeholder="Create New Room ID"
                fullWidth
                sx={{ mt: 1 }}
              />
            </Stack>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth type="submit">
              Host
            </Button>
          </ListItem>
        </form>
      </List>
    </Drawer>
  );
};

export default HostGameDrawer;
