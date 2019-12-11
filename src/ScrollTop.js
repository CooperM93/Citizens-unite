import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }, 
  scrollTopFab: {
    backgroundColor: "RGBA(24,27,28,0.85)",
    color: "#9b9e9f",
    "&:hover": {
        backgroundColor: "RGBA(24,27,28,0.93)",
        color: "#9b9e9f",
    }
  }
}));

export default function ScrollTop(props) {
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = event => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <div role="presentation" className={classes.root}>
        <Fab onClick={handleClick} classes={{root: classes.scrollTopFab}} size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}