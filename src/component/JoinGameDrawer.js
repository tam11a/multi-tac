import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import { MdClose } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";

const JoinGameDrawer = ({ drawer, setDrawer }) => {
  return (
    <SwipeableDrawer
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
        <IconButton
          color="primary"
          component="span"
          onClick={() => setDrawer(false)}
        >
          <MdClose />
        </IconButton>
        <Typography variant="button" flexGrow={1}>
          Join A Game
        </Typography>
        <IconButton color="primary" component="span">
          <AiOutlineLink />
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
            Join with an existing Room ID from your friend who invited you to
            join. If you are permitted to Join, you will be able to join else,
            you have to wait till your friend gives you permission.
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
              <ListItemText secondary={"Room ID or URL"} />
              <OutlinedInput
                placeholder="Room ID or URL"
                fullWidth
                sx={{ mt: 1 }}
              />
            </Stack>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth type="submit">
              Join
            </Button>
          </ListItem>
        </form>
      </List>
    </SwipeableDrawer>
  );
};

export default JoinGameDrawer;
