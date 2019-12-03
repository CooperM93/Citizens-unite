import React from 'react'
import TitleBarStyles from './styles/TitleBarStyles';
import { withStyles } from '@material-ui/styles';

function TitleBar(props) {
    const { classes, page } = props;
    return (
    <div className={classes.container}>
        {page == 'discussion' &&
            <div className={classes.disTitleBox}>
                <h1 className={classes.title}>Discussions</h1>
            </div>
        }
        {page == 'events' &&
            <div className={classes.evtTitleBox}>
                <h1 className={classes.title}>Events</h1>
            </div>
        }
        {page == 'fundraising' &&
            <div className={classes.fundTitleBox}>
                <h1 className={classes.title}>Fundraising</h1>
            </div>
        }
    </div>
    )
}

export default withStyles(TitleBarStyles)(TitleBar);