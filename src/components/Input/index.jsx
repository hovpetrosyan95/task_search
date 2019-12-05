import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import "./index.scss";

export default function Input(props) {
  const { onInputChange, isInputValid } = props;
  const attributes = isInputValid
    ? {
        id: "outlined-basic",
        label: "Search Field"
      }
    : {
        error: true,
        id: "outlined-error-helper-text",
        label: "Validation Error",
        helperText: "Minimal 2 chars is required",
        margin: "normal"
      };

  return (
    <TextField
      {...attributes}
      className="search-input"
      variant="outlined"
      onKeyUp={onInputChange}
    />
  );
}

Input.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isInputValid: PropTypes.bool.isRequired
};
