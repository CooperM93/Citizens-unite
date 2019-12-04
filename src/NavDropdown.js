import React from 'react';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';  
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {StyledMenu, StyledMenuItem, useStyles} from './styles/NavDropdownStyles';

export default function NavDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = event => {
    const { myValue } = event.currentTarget.dataset;
    console.log(event.currentTarget.dataset);
    props.pageChange(myValue);
    props.history.push(myValue);
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
        onClick={handleOpen}
        classes={{root: classes.button}}
      >
        <MenuIcon />
      </Button>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        value={props.location.pathname}
      >
        <StyledMenuItem onClick={handleClick} data-my-value="">
            <ListItemIcon classes={{root: classes.icon}}>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick} data-my-value="discussion">
            <ListItemIcon classes={{root: classes.icon}}>
                <RestoreIcon />
            </ListItemIcon>
            <ListItemText primary="Discussion" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick} data-my-value="events">
            <ListItemIcon classes={{root: classes.icon}}>
                <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick} data-my-value="fundraising">
            <ListItemIcon classes={{root: classes.icon}}>
                <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Fundraising" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
