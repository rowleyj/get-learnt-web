import React from "react";
import {
  Container,
  Card,
  CardHeader,
  Avatar,
  Typography,
  Grid,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const reviews = [
  {
    by: "shaebae123",
    content:
      "These folks keep the content coming constiently and everytime i listen in, I learn something new i.e. I get learnt!",
    rating: 5,
  },
  {
    by: "Fergie217",
    content:
      "Fantastic commentary on some really interesting topics!! What are you waiting for? Get Learnt",
    rating: 5,
  },
  {
    by: "joshdonohue",
    content: "Covers many different topics of science and is very interesting!",
    rating: 5,
  },
];
const styles = {
  padding: "4px",
  margin: "8px",
};
export default class Reviews extends React.Component {
  render() {
    return (
      <Container>
        <Card style={styles} elevation={8}>
          <CardHeader title="Reviews"></CardHeader>

          {reviews.map((review, index) => {
            return (
              <Card key={index} style={styles} elevation={2}>
                <CardHeader
                  title={review.content}
                  subheader={
                    <Grid direction="row" justify="center" alignItems="center">
                      <Typography>{review.by}</Typography>
                      <Rating
                        value={review.rating}
                        disabled={true}
                        name={review.by}
                      ></Rating>
                    </Grid>
                  }
                  avatar={
                    <Avatar>{String(review.by).charAt(0).toUpperCase()}</Avatar>
                  }
                ></CardHeader>
              </Card>
            );
          })}
        </Card>
      </Container>
    );
  }
}
