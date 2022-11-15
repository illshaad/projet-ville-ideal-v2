import React, { useState, useEffect } from "react";
import SnackbarMUI from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Snackbar({ message, status }) {
  const [open, setOpen] = useState(true);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleMessageResponse = (message) => {
    if (message) return message;
  };

  useEffect(() => {
    if (message && !open) setOpen(true);
  }, [message]);

  return (
    <SnackbarMUI open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity={status === 200 || status === 201 ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {handleMessageResponse(message)}
      </MuiAlert>
    </SnackbarMUI>
  );
}
