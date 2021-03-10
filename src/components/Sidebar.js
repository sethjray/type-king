/** @format */
//******************************************************************************
// Sidebar.js
// Holds the Sidebar function that controls the pullout sidebar on the left
// side of the screen
//
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  makeStyles,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import {
  AccountCircle,
  Apps,
  Timeline,
  List as ListIcon,
  Info,
  Close,
  Help,
} from "@material-ui/icons";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import TutorialDialog from './TutorialDialog';

const drawerWidthExpanded = 240;
const drawerWidthCondensed = 58;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidthExpanded,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    overflowX: "hidden",
    width: drawerWidthExpanded,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: drawerWidthCondensed, //theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthCondensed, //theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

export default connect(mapStateToProps)(function Sidebar(props) {
  const classes = useStyles();
  const [tutorialDialogOpen, setTutorialDialogOpen] = React.useState(false);



  const handleTutorialDialogOpen = () => {
    setTutorialDialogOpen(true);
  };

  const handleTutorialDialogClose = () => {
    setTutorialDialogOpen(false);
  }

  return (
    <div className="modal">
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.drawerOpen,
          [classes.drawerClose]: !props.drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.drawerOpen,
            [classes.drawerClose]: !props.drawerOpen,
          }),
        }}
        open={props.drawerOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => props.setDrawerOpen(false)}>
            <Close color="primary" />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.link} to="/app/exercise">
                <ListItem button key="Exercise">
                  <ListItemIcon>
                    <PlayCircleFilledIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Exercise" />
                </ListItem>
          </Link>
          <Link className={classes.link} to="/app/exerciseselection">
                <ListItem button key="ExerciseSelection">
                  <ListItemIcon>
                    <Apps color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="ExerciseSelection" />
                </ListItem>
          </Link>
          <Link className={classes.link} to="/app/stats">
                <ListItem button key="Stats">
                  <ListItemIcon>
                    <EqualizerIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Stats" />
                </ListItem>
          </Link>
          <ListItem button 
          key="Tutorial"
          onClick={() =>
            handleTutorialDialogOpen()
          }
          >
            <ListItemIcon>
              <HelpOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Tutorial" />
          </ListItem>
          <TutorialDialog
            tutorialDialogOpen={tutorialDialogOpen}
            handleTutorialDialogClose={handleTutorialDialogClose}
          />
        </List>
        <Divider />
        <Divider />
      </Drawer>
    </div>
  );
});
//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
  return {
  };
}
