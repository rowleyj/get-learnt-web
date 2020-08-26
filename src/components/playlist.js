import React from "react";
import {
  Button,
  Card,
  MenuList,
  MenuItem,
  Avatar,
  CardActionArea,
  Container,
  Grid,
} from "@material-ui/core";
import banner from "../banner.png";
import {
  FaYoutube,
  FaSpotify,
  FaGooglePlay,
  FaMoneyBill,
} from "react-icons/fa";

var links = [
  {
    icon: <FaYoutube></FaYoutube>,
    platform: "Youtube",
    link: "https://www.youtube.com/channel/UCgfUEPiN05Lgyh_ftHGhuLw",
  },
  {
    icon: <FaSpotify></FaSpotify>,
    platform: "Spotify",
    link: "https://open.spotify.com/show/2SHH93AC29bYTLXdroAV5w",
  },
  {
    icon: <FaGooglePlay></FaGooglePlay>,
    platform: "Google Podcasts",
    link:
      "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85YWJlNGU4L3BvZGNhc3QvcnNz",
  },
  {
    icon: "",
    platform: "Anchor",
    link: "https://anchor.fm/get-learnt",
  },
  {
    icon: "",
    platform: "Breaker",
    link: "https://www.breaker.audio/get-learnt",
  },
  {
    icon: "",
    platform: "Overcast",
    link: "https://overcast.fm/itunes1456022841/get-learnt",
  },
  { icon: "", platform: "Pocket Casts", link: "https://pca.st/a425" },
  {
    icon: "",
    platform: "RadioPublic",
    link: "https://radiopublic.com/get-learnt-G2BP7L",
  },
];

const styles = {
  padding: "4px",
  margin: "8px",
};

const paypalLink = "https://www.paypal.me/getlearntpodcast";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { extendedList: false };
  }

  extendList() {
    this.setState({ extendedList: true });
  }

  render() {
    return (
      <Container>
        <Card elevation={8} style={styles}>
          <CardActionArea>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ background: "rgb(20,20,22)" }}
            >
              <Avatar
                src={banner}
                alt="Get Learnt Podcast"
                style={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Grid>

            {/* </div> */}
            {this.state.extendedList ? (
              <MenuList>
                {links.map((link, index) => {
                  return (
                    <MenuItem key={index}>
                      {/* {link.icon} */}
                      <Button
                        name={link.platform}
                        startIcon={link.icon}
                        href={link.link}
                        target="blank"
                      >
                        {link.platform}
                      </Button>
                    </MenuItem>
                  );
                })}
                <Button
                  name="Donate"
                  startIcon={<FaMoneyBill></FaMoneyBill>}
                  href={paypalLink}
                  target="blank"
                >
                  Donate
                </Button>
              </MenuList>
            ) : (
              <MenuList>
                {links.map((link, index) => {
                  return index < 3 ? (
                    <MenuItem key={index}>
                      {/* {link.icon} */}
                      <Button
                        name={link.platform}
                        startIcon={link.icon}
                        href={link.link}
                        target="blank"
                      >
                        {link.platform}
                      </Button>
                    </MenuItem>
                  ) : (
                    <div key={index}></div>
                  );
                })}
                <Button name="See More" onClick={() => this.extendList()}>
                  See More
                </Button>
                <Button
                  name="Donate"
                  startIcon={<FaMoneyBill></FaMoneyBill>}
                  href={paypalLink}
                  target="blank"
                >
                  Donate
                </Button>
              </MenuList>
            )}
          </CardActionArea>
        </Card>
      </Container>
    );
  }
}
