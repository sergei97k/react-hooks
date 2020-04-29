import React, { useReducer } from "react";
import PropTypes from "prop-types";

import {
  getNotes as get,
  postNote as post,
  deleteNote as remove,
} from "helpers/api";

import { NotesContext } from "./notesContext";
import notesReducer from "./notesReducer";
import { ADD_NOTE, DELETE_NOTE, GET_NOTES, SHOW_LOADER } from "../types";

const initialState = {
  loading: false,
  notes: [],
};

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const showLoading = () => {
    dispatch({
      type: SHOW_LOADER,
    });
  };

  const getNotes = async () => {
    try {
      showLoading();
      const res = await get();

      dispatch({
        type: GET_NOTES,
        payload: res,
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  const addNote = async (title) => {
    try {
      const note = {
        title,
        date: new Date().toJSON(),
      };
      const { name } = await post(note);

      dispatch({
        type: ADD_NOTE,
        payload: {
          ...note,
          id: name,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  const deleteNote = async (id) => {
    try {
      await remove(id);

      dispatch({
        type: DELETE_NOTE,
        payload: id,
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        loading: state.loading,
        notes: state.notes,
        showLoading,
        getNotes,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default NotesProvider;
