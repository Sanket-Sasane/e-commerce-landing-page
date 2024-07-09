import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Popup = ({ handleOk, open }) => {
  return (
    <>
      <BootstrapDialog
        onClose={handleOk}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleOk}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon
            sx={{
              ":hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          />
        </IconButton>
        <DialogContent>
          <Typography
            gutterBottom
            sx={{
              marginTop: "42px",
              fontFamily: "sans-serif",
            }}
          >
            thanks for subscribe. exciting offers wil reached to you soon....
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "black",
              fontFamily: "sans-serif",
              ":hover": {
                backgroundColor: "green",
                color: "white",
              },
            }}
            onClick={handleOk}
          >
            ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default Popup;
