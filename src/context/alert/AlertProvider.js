import React, { useReducer, useCallback } from "react";
import PropTypes from "prop-types";

import { AlertContext } from "./alertContext";
import alertReducer from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

const initialState = {
  visible: false,
  type: "",
  text: "",
};

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = useCallback((text, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        text,
        type,
      },
    });
  }, []);

  const hideAlert = () => {
    dispatch({
      type: HIDE_ALERT,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alertMessage: state,
        showAlert,
        hideAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AlertProvider;
