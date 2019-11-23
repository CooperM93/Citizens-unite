import React from 'react';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {StyledMenu, StyledMenuItem, useStyles} from './styles/NavDropdownStyles';

export default function NavDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (e, newValue) => {
    //pushes the new page to app.js and sets the state their
    props.pageChange(newValue);
    //sets the local state to the new page
    setValue(newValue);
    //redirects to the new url selected 
    props.history.push(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="white"
        onClick={handleClick}
        classes={{root: classes.button}}
      >
        {props.location.pathname !== '/' ? props.location.pathname.slice(1) : 'Home'}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
            <BottomNavigation 
                value={props.location.pathname} 
                showLabels
                onChange={handleChange} 
                classes={{root: classes.root}}
            >
                <BottomNavigationAction 
                    value="/discussion" 
                    classes={{ 
                        root: classes.icon, 
                        selected: classes.selected 
                    }} 
                    icon={
                        <RestoreIcon />
                    } 
                />
            </ BottomNavigation>
            </StyledMenuItem>
            <StyledMenuItem>
                <BottomNavigation 
                    value={props.location.pathname} 
                    onChange={handleChange} 
                    classes={{root: classes.root}}
                >
                    <BottomNavigationAction 
                        value="/events" 
                        classes={{ 
                            root: classes.icon, 
                            selected: classes.selected 
                        }} 
                        icon={
                            <LocationOnIcon />
                        } 
                    />
                </BottomNavigation>
            </StyledMenuItem>
            <StyledMenuItem>
                <BottomNavigation 
                    value={props.location.pathname} 
                    onChange={handleChange} 
                    classes={{root: classes.root}}
                >
                    <BottomNavigationAction  
                        value="/fundraising" 
                        classes={{ 
                            root: classes.icon, 
                            selected: classes.selected 
                        }} 
                        icon={
                            <AttachMoneyIcon />
                        } 
                    />
                </BottomNavigation>
            </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
