import React from "react";
import "./App.css";
import Playlist from "./components/playlist";
import Reviews from "./components/reviews";
import Description from "./components/description";
import ComeOnPod from "./components/comeonpod";
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Button,
  Divider,
  Typography,
  Hidden,
} from "@material-ui/core";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9a67ea", //"#ffffff",
      main: "#673ab7", //"#ffffff",
      dark: "#320b86",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000000",
    },
  },
});

const styles = {
  padding: "8px",
  margin: "6px",
};

function viewMerch() {
  alert("Coming Soon!");
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <AppBar
            position="static"
            style={{ background: "#ffffff", padding: "4px" }}
            square={false}
          >
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Hidden xsDown>
                  <Grid
                    item
                    md={4}
                    sm={10}
                    xs={12}
                    justify="flex-start"
                    container
                  >
                    <Button
                      name="Home"
                      variant="contained"
                      color="primary"
                      style={styles}
                    >
                      Home
                    </Button>
                    <Button
                      name="Merchandise"
                      variant="contained"
                      color="primary"
                      style={styles}
                      onClick={() => {
                        viewMerch();
                      }}
                    >
                      Merchandise
                    </Button>
                  </Grid>
                </Hidden>

                <Grid item md={4} sm={0} justify="flex-start">
                  <Typography
                    variant="h1"
                    style={{
                      color: "black",
                      fontSize: "38px",
                      fontFamily: "Kalam",
                    }}
                  >
                    The Get Learnt Podcast
                  </Typography>
                </Grid>
                <Hidden xsDown>
                  <Grid
                    md={4}
                    sm={2}
                    justify="flex-end"
                    container
                    // className="hide-mobile"
                    display={{ xs: "none", lg: "block" }}
                  >
                    <Button
                      name="Contact Us"
                      variant="contained"
                      color="primary"
                      style={styles}
                      href="https://www.facebook.com/getlearntpodcast"
                      target="blank"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Toolbar>
          </AppBar>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} md={6}>
              <Playlist></Playlist>
            </Grid>
            <Grid item xs={12} md={6}>
              <Reviews></Reviews>
            </Grid>
          </Grid>
          <Divider style={{ margin: "10px" }}></Divider>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={12}>
              <Description></Description>
            </Grid>
          </Grid>
          <Divider style={{ margin: "10px" }}></Divider>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={12}>
              <ComeOnPod></ComeOnPod>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
