import React, { Component } from 'react'
import ACard from './ACard';
import pageStyles from './styles/pageStyles';
import { withStyles } from '@material-ui/core/styles';



class Discussions extends Component {
    render() {
        const { classes } = this.props;
        return (
                <div className={classes.content}>
                    <ACard />
                </div>
        )
    }
}

export default withStyles(pageStyles)(Discussions);