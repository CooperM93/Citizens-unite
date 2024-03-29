import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/TooltipStyles'

//TODO fix tooltip positioning to center on progress bar end
function Tooltip(props) {
    const { classes, raised, goal } = props;
    return (
        <div className={classes.referencePoint}>

                <div className={classes.container} >
                    <span className={classes.Tooltip}/>
                
                    <span className={classes.TooltipBox}>${raised}/${goal}</span>
 
            </div>
        </div>
    )
}

export default withStyles(styles)(Tooltip)