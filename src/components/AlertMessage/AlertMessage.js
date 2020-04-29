import React, { useContext } from "react";

import Alert from "@material-ui/lab/Alert";

import { AlertContext } from "context";

const AlertMessage = () => {
  const {
    alertMessage: { visible, type, text },
    hideAlert,
  } = useContext(AlertContext);

  if (!visible) {
    return null;
  }

  return (
    <Alert severity={type} onClose={hideAlert}>
      {text}
    </Alert>
  );
};

export default AlertMessage;
