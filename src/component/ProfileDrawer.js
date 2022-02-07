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
import { MdClose, MdOutlineSecurity } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

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
          color="error"
          component="span"
          // onClick={() => setDrawer(false)}
        >
          <FiLogOut />
          {/* <FiSettings /> */}
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
          <Stack direction={"column"} width={"100%"}>
            <ListItemText secondary={"Username"} />
            <ListItemText primary={"Tam"} />
          </Stack>
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
            <MdOutlineSecurity />
          </IconButton>
          <Typography variant="button" flexGrow={1}>
            Account settings
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
              <ListItemText secondary={"Current Password"} />
              <OutlinedInput
                placeholder="Current Password"
                fullWidth
                sx={{ mt: 1 }}
                type="password"
              />
            </Stack>
          </ListItem>
          <ListItem>
            <Stack direction={"column"} width={"100%"}>
              <ListItemText secondary={"New Password"} />
              <OutlinedInput
                placeholder="New Password"
                fullWidth
                sx={{ mt: 1 }}
                type="password"
              />
            </Stack>
          </ListItem>
          <ListItem>
            <Stack direction={"column"} width={"100%"}>
              <ListItemText secondary={"Confirm New Password"} />
              <OutlinedInput
                placeholder="Confirm New Password"
                fullWidth
                sx={{ mt: 1 }}
                type="password"
              />
            </Stack>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth type="submit">
              Update Password
            </Button>
          </ListItem>
        </form>
        <Divider
          sx={{
            borderColor: theme.palette.background.light,
            borderWidth: "1px",
            my: 2,
          }}
        />
        <ListItem>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            startIcon={<FiLogOut />}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default ProfileDrawer;
