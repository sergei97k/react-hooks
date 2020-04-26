import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Notes = ({ notes }) => {
  const classes = useStyles();

  if (!notes.length) {
    return null;
  }

  return (
    <List
      classes={{
        root: classes.root,
      }}
      aria-label="list of notes"
    >
      {notes.map(({ id, title, date }) => (
        <ListItem key={id}>
          <ListItemText
            primary={title}
            secondary={
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {date}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
};

export default Notes;
