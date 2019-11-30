import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

export default function Prompt(props) {
  const { open, handleClose, tournamentTitle } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move", color: "red" }}
          id="draggable-dialog-title"
        >
          Confirm action
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want really to delete this tournament:
          </DialogContentText>
          <DialogContentText style={{ color: "blue" }}>
            {tournamentTitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Prompt.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  tournamentTitle: PropTypes.string || PropTypes.object
};
