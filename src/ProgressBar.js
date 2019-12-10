import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProgressBarStyles';
import Tooltip from './Tooltip';
import Zoom from '@material-ui/core/Zoom';

//Clean up unused code
//!! add Tooltip to show how much raised out of goal


function ProgressBar(props){
    const [progress, setProgress] = useState(props.raised ? props.raised / props.goal : 0)
    const [complete, setComplete] = useState(progress === 1 ? true : false)
    const { classes, raised, goal } = props;
    return (
        <div>
            <div className={classes.ProgressBarContainer}>
                <div className={classes.fill} style={{ 'width': `${progress*100}%`}}></div>
            </div>
            <div  style={{ marginLeft: `${progress*100}%` }}>
                <Tooltip position={progress} raised={raised} goal={goal}></Tooltip>
            </div>
        </div>
    )
}

export default withStyles(styles)(ProgressBar);
