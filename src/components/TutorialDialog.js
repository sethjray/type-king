/** @format */
//******************************************************************************
// src/TutorialDialog.js
// Contains the function that creats a popup when a user attempts
//
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export default function TutorialDialog(props) {

  return (
    <Dialog
      open={props.tutorialDialogOpen}
      onClose={props.handleTutorialDialogClose}
    >
      <DialogTitle>Welcome to TypeKing</DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{
            textAlign: "center",
            color: "#ea4b35",
          }}
        >
          This is a quick start tutorial to help you learn good typing practices!
          First place your pointer fingers on the f and j keys, you should feel little bumps. 
          This is so you can always find them without looking. Your remaining
          fingers (except your thumb) should each be on a key of the same row,
          with left pinky on 'a' and right pinky on ';'. These are your home keys, 
          and is where we'll start with the first exercise. 
          Please click on the first exercise and then play to get started!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
