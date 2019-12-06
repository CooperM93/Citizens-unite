import React, { Component, useState } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProgressBarStyles';

const styledBy = (progress, mapping) => props => mapping[props[progress]];
const array100 = new Array(100);


function ProgressBar(props){
    /*console.log(array100.map((num, i) => {
        i: `${i}%`;
    }))*/
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
