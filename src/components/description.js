import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";

const styles = {
  padding: "4px",
  margin: "8px",
};

export default class Description extends React.Component {
  render() {
    return (
      <Container>
        <Card style={styles} elevation={8}>
          <CardHeader title="About The Pod"></CardHeader>
          <CardContent>
            Scientifically the greatest podcast. We cover topics ranging from
            microbiology and neuroscience, to computer science and engineering,
            to astrophysics. We love science and we hope this podcast will help
            you "get learnt"!
          </CardContent>
          <Typography variant="h5">Season 2 On Now!</Typography>
          <iframe
            style={styles}
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/uGEBqZJ-yDY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>
      </Container>
    );
  }
}
