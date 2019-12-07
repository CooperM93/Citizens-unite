import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProgressBarStyles';

//Clean up unused code
//!! add Tooltip to show how much raised out of goal


function ProgressBar(props){
    const [progress, setProgress] = useState(props.raised ? props.raised / props.goal : 0)
    const [complete, setComplete] = useState(progress === 1 ? true : false)
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.fill} style={{ 'width': `${progress*100}%`}}></div>
        </div>
    )
}

export default withStyles(styles)(ProgressBar);
