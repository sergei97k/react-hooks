import React from "react";
import PropTypes from "prop-types";

import Alert from "@material-ui/lab/Alert";

const AlertMessage = ({ type, text }) => {
  return <Alert severity={type}>{text}</Alert>;
};

AlertMessage.propTypes = {
  type: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
  text: PropTypes.string,
};

AlertMessage.defaultProps = {
  text: "",
};

export default AlertMessage;
