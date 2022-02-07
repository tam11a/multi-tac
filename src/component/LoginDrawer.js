import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import { MdClose } from "react-icons/md";
import { FiAlertTriangle, FiLogIn, FiUser } from "react-icons/fi";
import handleSubmit from "./../utilities/handleSubmit";
import { postFunc } from "../utilities/postFunc";

const LoginDrawer = ({ drawer, setDrawer, toDrawer, setToken }) => {
  // state
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState();
  // func
  const login = (e) => {
    setIsLoading(true);
    setIsError();
    const params = handleSubmit(e);
    if (params.uname && params.password) {
      postFunc("/login", params)
        .then((data) => data.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
          } else {
            setIsError("Invalid Username or Password.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsError("Username & Password is Required for Login.");
    }
    setIsLoading(false);
  };

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

        <form method="POST" onSubmit={(e) => login(e)}>
          <ListItem>
            <Stack direction={"column"} width={"100%"}>
              <ListItemText secondary={"Username"} />
              <OutlinedInput
                placeholder="Username"
                fullWidth
                sx={{ mt: 1 }}
                name={"uname"}
                autoComplete={"off"}
              />
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
                name={"password"}
              />
            </Stack>
          </ListItem>
          {isError ? (
            <ListItem sx={{ justifyContent: "center" }}>
              <IconButton color="error" sx={{ mr: 1 }}>
                <FiAlertTriangle />
              </IconButton>
              <Typography variant="overline">{isError}</Typography>
            </ListItem>
          ) : (
            <></>
          )}
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={isLoading}
            >
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
