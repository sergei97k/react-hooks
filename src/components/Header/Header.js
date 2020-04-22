import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  activeLinkStyle: {
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          React Hooks App
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/"
            className={classes.link}
            activeClassName={classes.activeLinkStyle}
            exact
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            component={RouterLink}
            to="/about"
            className={classes.link}
            activeClassName={classes.activeLinkStyle}
            exact
          >
            About
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
