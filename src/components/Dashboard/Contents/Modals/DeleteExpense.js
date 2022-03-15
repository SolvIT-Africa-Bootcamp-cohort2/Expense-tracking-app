import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FaExclamationTriangle } from "react-icons/fa";

function DeleteExpense({
  showDeleteAlert,
  setShowDeleteAlert,
  deleteTransaction,
}) {
  return (
    <div>
      <Dialog
        open={showDeleteAlert}
        onClose={() => setShowDeleteAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <FaExclamationTriangle className="text-danger" />
          <span className="text-danger"> Comfirm Process</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete this transaction?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteAlert(false)} color="primary">
            Not Sure
          </Button>
          <Button
            color="secondary"
            onClick={() => deleteTransaction()}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteExpense;
