import React, { Component } from 'react'
import ACard from './ACard';
import pageStyles from './styles/pageStyles';
import { withStyles } from '@material-ui/core/styles';



class Discussions extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.disTitleBox}>
                    <h1 className={classes.title}>Discussions</h1>
                </div>
                <div className={classes.content}>
                    <ACard />
                </div>
            </div>
        )
    }
}

export default withStyles(pageStyles)(Discussions);