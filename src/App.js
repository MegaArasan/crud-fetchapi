import "./App.css";
import background from "./background.webp";
import { Userlist } from "./Userlist.js";
import { Adduser } from "./Adduser";

import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { Switch, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import { Profile } from "./Profile.js";
import { Edituser } from "./Edituser";

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ borderRadius: "0", minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/users")}
              >
                User List
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/Adduser")}
              >
                Add User
              </Button>
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                style={{ marginLeft: "auto" }}
              >
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                {mode === "light" ? "dark mode" : "light mode"}
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <Userlist />
            </Route>
            <Route exact path="/user/:id">
              <Profile />
            </Route>
            <Route exact path="/users/edit/:id">
              <Edituser />
            </Route>
            <Route exact path="/Adduser">
              <Adduser />
            </Route>
            <Route path="**">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div className="homepage">
      <img src={background} alt="" className="image" />
      <div className="head">
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Pacifico",
            color: "white",
            fontSize: { xs: "40px", sm: "70px" },
          }}
        >
          Welcome To User List
        </Typography>
      </div>
    </div>
  );
}
function Notfound() {
  return (
    <div>
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="notfound"
      />
    </div>
  );
}
