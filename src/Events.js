import React, { Component } from 'react'
import pageStyles from './styles/pageStyles';
import ACard from './ACard';
import { withStyles } from '@material-ui/core/styles';

class Events extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.evtTitleBox}>
                    <h1 className={classes.title}>Events</h1>
                </div>
                <div className={classes.content}>
                    <ACard />
                </div>
            </div>
        )
    }
}

export default withStyles(pageStyles)(Events);