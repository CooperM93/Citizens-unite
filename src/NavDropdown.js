import React from 'react';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';  
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {StyledMenu, StyledMenuItem, useStyles} from './styles/NavDropdownStyles';

export default function NavDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    const { myValue } = event.currentTarget.dataset;
    console.log(myValue);
    props.pageChange(myValue);
    setAnchorEl(event.currentTarget);
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
        value={props.location.pathname}
      >
        <StyledMenuItem onClick={handleClick} data-my-value="/discussion">
            <ListItemIcon classes={{root: classes.icon}}>
                <RestoreIcon />
            </ListItemIcon>
            <ListItemText primary="Discussion" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick} data-my-value="/events">
            <ListItemIcon classes={{root: classes.icon}}>
                <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick} data-my-value="/fundraising">
            <ListItemIcon classes={{root: classes.icon}}>
                <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Fundraising" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
