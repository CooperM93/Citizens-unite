import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles/NavSliderStyles';

export default function NavSlider(props) {
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

  return (
    <BottomNavigation 
        //determines the current value from the current page url
        value={props.location.pathname} 
        onChange={handleChange} 
        className={classes.root}
    >   
        <BottomNavigationAction 
            label="Discussion" 
            value="/discussion" 
            classes={{ 
                root: classes.icon, 
                selected: classes.selected 
            }} 
            icon={
                <RestoreIcon />
            } 
        />
        <BottomNavigationAction 
            label="Events" 
            value="/events" 
            classes={{ 
                root: classes.icon, 
                selected: classes.selected 
            }} 
            icon={
                <LocationOnIcon />
            } 
        />
        <BottomNavigationAction 
            label="Fundraising" 
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
  );
}