import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { Home } from "pages";
import { Header } from "components";

const About = lazy(() => import("./pages/About/About"));

const useStyles = makeStyles(() => ({
  appContainer: {
    margin: "50px 0",
  },
}));

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
];

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
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={Boolean(match)}
                  timeout={500}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
