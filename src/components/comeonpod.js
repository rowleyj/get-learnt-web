import React from "react";

import {
  Container,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";

import { FaPodcast } from "react-icons/fa";

const styles = {
  padding: "8px",
  margin: "8px",
};

export default class ComeOnPod extends React.Component {
  render() {
    return (
      <Container>
        <Card elevation={8} style={styles}>
          <CardHeader title="Want To Be On The Podcast?"></CardHeader>
          <CardContent>
            <Typography>
              We are always looking for people to come onto the podcast and help
              share their research. Whether you are a distinguished professor
              heading a department and a large research group, or an
              undergraduate doing research in a lab we'd love to talk to you!
              Just fill out the form below and we will be in contact to get you
              on the podcast.
            </Typography>
            <Button
              startIcon={<FaPodcast></FaPodcast>}
              name="Come On The Podcast"
              size="large"
              variant="contained"
              color="primary"
              style={styles}
              href="https://docs.google.com/forms/d/1_1bN5mBwpG0bNtsoo1Y-eBwlmtzaq9elhky5Bw5f4c4/viewform?fbclid=IwAR0lpk-usmlZ1hI57XZq7D3Kvr3qv4YZn4A47oP-5NAmY44pUr72uhCHySc&edit_requested=true"
              target="blank"
            >
              Come On The Podcast
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
