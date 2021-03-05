/** @format */
//******************************************************************************
// Topbar.js
// Holds the Topbar function that displays the bar at the top of the website
// Contains the logout button
//
import clsx from "clsx";
import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu, ExitToApp } from "@material-ui/icons";

const drawerWidthExpanded = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidthExpanded,
    width: `calc(100% - ${drawerWidthExpanded}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar,
  },
  logo: {
    fill: "#000",
    height: 35,
    [theme.breakpoints.up("md")]: {
      height: 50,
    },
  },
  orange: {
    fill: theme.palette.primary.main,
  },
  logoutButton: {
    color: theme.palette.primary.main,
    backgroundColor: "white",
    fontSize: 12,
    fontWeight: "bolder",
    marginLeft: "auto",
    marginRight: 0,
    "&:hover": {
      backgroundColor: "#303030",
      color: theme.palette.primary.main,
    },
  },
  logoutIcon: {
    marginLeft: "auto",
    marginRight: 0,
  },
}));

export default function Topbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const widthAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  function LogoutButton() {
    if (widthAboveMd)
      return (
        <Button
          dataTestId="logout"
          className={classes.logoutButton}
          onClick={props.logout}
        >
          Logout
        </Button>
      );

    return (
      <IconButton className={classes.logoutIcon} onClick={props.logout}>
        <ExitToApp />
      </IconButton>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => props.setDrawerOpen(true)}
            edge="start"
            className={clsx(
              classes.menuButton,
              props.drawerOpen && classes.hide
            )}
          >
            <Menu />
          </IconButton>
          <svg
            className={classes.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41.17 41.17"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <circle className="cls-1" cx="20.58" cy="20.58" r="20.58" />
              </g>
            </g>
          </svg>
          <svg
            className={classes.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 168.56 43.24"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
              </g>
            </g>
          </svg>
          <LogoutButton />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}
