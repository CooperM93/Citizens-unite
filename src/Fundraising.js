import React, { Component } from 'react'
import pageStyles from './styles/pageStyles';
import ACard from './ACard';
import { withStyles } from '@material-ui/core/styles';

class Fundraising extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <ACard />
            </div>
        )
    }
}

export default withStyles(pageStyles)(Fundraising);