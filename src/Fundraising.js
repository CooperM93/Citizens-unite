import React, { Component } from 'react'
import pageStyles from './styles/pageStyles';
import ACard from './ACard';
import { withStyles } from '@material-ui/core/styles';

class Fundraising extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.fundTitleBox}>
                    <h1 className={classes.title}>Fundraising</h1>
                </div>
                <div className={classes.content}>
                    <ACard />
                </div>
            </div>
        )
    }
}

export default withStyles(pageStyles)(Fundraising);