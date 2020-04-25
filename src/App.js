import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { Home } from "./pages";
import { Header } from "./components";

const About = lazy(() => import("./pages/About/About"));

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
        <Suspense
          fallback={
            <Box display="flex" alignItems="center" justifyContent="center">
              <CircularProgress />
            </Box>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
