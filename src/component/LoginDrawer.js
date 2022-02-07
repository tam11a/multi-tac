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
import { FiLogIn, FiUser } from "react-icons/fi";

const LoginDrawer = ({ drawer, setDrawer, toDrawer }) => {
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
        <IconButton color="primary" component="span">
          <FiLogIn />
        </IconButton>
        <Typography variant="button" flexGrow={1}>
          Login
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
            Login with your Username and Password.
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
            <FiUser />
          </IconButton>
          <Typography variant="button" flexGrow={1}>
            Login Information
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
              <ListItemText secondary={"Username"} />
              <OutlinedInput placeholder="Username" fullWidth sx={{ mt: 1 }} />
            </Stack>
          </ListItem>
          <ListItem>
            <Stack direction={"column"} width={"100%"}>
              <ListItemText secondary={"Password"} />
              <OutlinedInput
                placeholder="Password"
                fullWidth
                sx={{ mt: 1 }}
                type={"password"}
              />
            </Stack>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth type="submit">
              Login
            </Button>
          </ListItem>
        </form>
        <Divider
          sx={{
            borderColor: theme.palette.background.light,
            borderWidth: "1px",
            mt: 2,
          }}
        />
        <ListItem>
          <Button
            fullWidth
            onClick={() => {
              setDrawer(false);
              toDrawer(true);
            }}
          >
            Create New Account?
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default LoginDrawer;
