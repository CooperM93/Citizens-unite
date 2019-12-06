import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


export const StyledMenu = withStyles({
    paper: {
        alignContent: 'center',
        border: '1px solid #d3d4d5',
        overflow: "hidden",
        backgroundColor: '#181b1c',
        marginTop: '17px',
    },
  })(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
  ));
  
  export const StyledMenuItem = withStyles(theme => ({
    root: {
        display: "flex",
        color: '#9b9e9f',
        '&:focus': {
            color: '#181b1c',
            backgroundColor: 'white',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: '#181b1c',
        },
      },
    },
  }))(MenuItem);

  
export const useStyles = makeStyles({
    root: {
        display: "block",
        margin: 'auto',
        width: '100%',
        height: '100%',
        backgroundColor: "#181b1c",
        alignContent: "center",
    },
    icon: {
        alignContent: "center",
        color: "#9b9e9f",
    },
    button: {
        backgroundColor: 'white',
    }
    //changes to navslider when screen expands
});