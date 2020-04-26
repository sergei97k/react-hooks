import { SHOW_ALERT, HIDE_ALERT } from "../types";

const alertReducer = (state, { payload, type }) => {
  switch (type) {
    case SHOW_ALERT:
      return { ...payload, visible: true };
    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default alertReducer;
