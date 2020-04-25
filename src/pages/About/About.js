import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        About page
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        Quickly build an effective React app. It&apos;s built with default
        Material-UI components with little customization.
      </Typography>
    </Container>
  );
};

export default About;
