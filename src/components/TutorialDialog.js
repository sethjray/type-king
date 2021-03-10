/** @format */
//******************************************************************************
// src/loreline_interaction/DeleteLorelineDialog.js
// Contains the function that creats a popup when a user attempts
// to delete a loreline
//
import React from "react";
import {
  Typography,
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deletebutton: {
    color: "#ea4b35",
    "&:hover": {
      color: "#000",
      backgroundColor: "#ea4b35",
      fontWeight: "bolder",
    },
  },
}));

export default function TutorialDialog(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.tutorialDialogOpen}
      onClose={props.handleTutorialDialogClose}
    >
      <DialogTitle>Welcome to the tutorial!!!</DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{
            textAlign: "center",
            color: "#ea4b35",
          }}
        >
          First place your pointer fingers on the f and j keys. Your remaining
          fingers (except your thumb) should each be on a key of the same row,
          with left pinky on 'a' and right pinky on ';'. Then click an exercise to get started!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
