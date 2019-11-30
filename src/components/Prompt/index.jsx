import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import { closePrompt } from "../../actions/prompt/closePrompt";
import { deleteTournament } from "../../actions/tournament/deleteTournament";

function Prompt(props) {
  const { closePrompt } = props;
  const { open, idForDeleting } = props.prompt;
  const getTitle = (id) => {
    const tournament = JSON.parse(localStorage.getItem(`id_${id}`));
    return tournament ? tournament.title : null;
  };

  const handleClose = () => closePrompt();

  const onTournamentDelete = (id) => {
    localStorage.removeItem(`id_${id}`);
    closePrompt();
    return props.deleteTournament(id);
  };

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
            {getTitle(idForDeleting)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button
            onClick={() => onTournamentDelete(idForDeleting)}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Prompt.propTypes = {
  prompt: PropTypes.object,
  handleClose: PropTypes.func,
  closePrompt: PropTypes.func.isRequired,
  deleteTournament: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  closePrompt: () => dispatch(closePrompt()),
  deleteTournament: (id) => dispatch(deleteTournament(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);
