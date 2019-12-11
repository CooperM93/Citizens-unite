import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProgressBarStyles';
import Tooltip from './Tooltip';
import useToggle from './hooks/Toggler';
import Grow from '@material-ui/core/Grow';

//Clean up unused code
//!! add Tooltip to show how much raised out of goal


function ProgressBar(props){
    const [progress, setProgress] = useState(props.raised ? props.raised / props.goal : 0)
    const [complete, setComplete] = useState(progress === 1 ? true : false)
    const [hover, toggleHover] = useToggle(false);
    const { classes, raised, goal } = props;
    return (
        <div
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover}
        >
            <div 
                className={classes.ProgressBarContainer}
            >
                <div className={classes.fill} style={{ 'width': `${progress*100}%`}}></div>
            </div>
            <div style={{ marginLeft: `${progress*100}%` }}>
                <Grow in={hover} style={{ transformOrigin: '0 0 0'}} {...(hover ? {timeout: 500} : {})}>
                    <div>
                    <Tooltip position={progress} raised={raised} goal={goal}></Tooltip>
                    </div>
                </Grow>
            </div>
        </div>
    )
}

export default withStyles(styles)(ProgressBar);
