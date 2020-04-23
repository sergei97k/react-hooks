import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./pages/Home";
import About from "./pages/About";
import { Header } from "./components";

const useStyles = makeStyles(() => ({
  appContainer: {
    margin: "50px 0",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Header />

      <Container maxWidth="xl" className={classes.appContainer}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
