import React, { useContext, useEffect, useCallback } from "react";
import { formatRelative } from "date-fns";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { NotesContext } from "../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  noResult: {
    color: theme.palette.primary.light,
  },
  date: {
    textTransform: "capitalize",
  },
}));

const formatDate = (date) => {
  return formatRelative(new Date(date), new Date());
};

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const { loading, notes, deleteNote } = notesContext;
  const getNotes = useCallback(notesContext.getNotes, []);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const classes = useStyles();

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!notes.length) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography className={classes.noResult}>
          List of notes is empty
        </Typography>
      </Box>
    );
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
                className={classes.date}
              >
                {formatDate(date)}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteNote(id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default Notes;
