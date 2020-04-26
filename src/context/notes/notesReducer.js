import { SHOW_LOADER, ADD_NOTE, GET_NOTES, DELETE_NOTE } from "../types";

const notesReducer = (state, { payload, type }) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case GET_NOTES:
      return {
        ...state,
        notes: Object.keys(payload || {}).map((key) => {
          return {
            ...payload[key],
            id: key,
          };
        }),
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
