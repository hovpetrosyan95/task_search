import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import "./index.scss";

export default function Input(props) {
  const { onInputChange, isInputValid } = props;
  const component = isInputValid ? (
    <TextField
      id="outlined-basic"
      className="search-input"
      label="Search Field"
      variant="outlined"
      onChange={onInputChange}
    />
  ) : (
    <TextField
      error
      id="outlined-error-helper-text"
      className="search-input"
      label="Validation Error"
      helperText="Minimal 2 chars is required"
      margin="normal"
      variant="outlined"
      onChange={onInputChange}
    />
  );
  return (
    <React.Fragment>
      {component}
      <div className></div>
    </React.Fragment>
  );
}

Input.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isInputValid: PropTypes.bool.isRequired
};
