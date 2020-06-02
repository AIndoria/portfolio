import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import AddIcon from "@material-ui/icons/Add";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitIcon from "@material-ui/icons/GitHub";
import InstaIcon from "@material-ui/icons/Instagram";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import WebIcon from "@material-ui/icons/Language";
import Link from "@material-ui/core/Typography";

import "./stylesheets/Appbar.css";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="primary"
        className={classes.appBar}
        style={{ textDecoration: "none" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Github">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aindoria"
            >
              <GitIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/aindoria"
            >
              <LinkedInIcon />
            </Link>
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <Link
              rel="noreferrer"
              target="_blank"
              href="mailto:indoria+portfolio@aindoria.com"
              data-rel="external"
            >
              <MailIcon />
            </Link>
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/aindoria"
            >
              <InstaIcon />
            </Link>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://blog.aindoria.com"
              onClick={preventDefault}
            >
              <WebIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
