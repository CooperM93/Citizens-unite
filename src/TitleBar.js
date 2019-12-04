import React from 'react'
import TitleBarStyles from './styles/TitleBarStyles';
import Transition from './Transition';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function TitleBar(props) {
    const { classes, page } = props;
    return (
    <TransitionGroup className={classes.container}>
        {page === '' &&
            <CSSTransition key={0} classNames="item" timeout={500}>
                <Transition>
                <div className={classes.homeTitleBox}>
                    <h1 className={classes.title}></h1>
                </div>
                </Transition>
            </CSSTransition>
        }
        {page === 'discussion' &&
            <CSSTransition key={1} classNames="item" timeout={500}>
                <Transition>
                    <div className={classes.disTitleBox}>
                        <h1 className={classes.title}>Discussions</h1>
                    </div>
                </Transition>
            </CSSTransition>
        }
        {page === 'events' &&
            <CSSTransition key={2} classNames="item" timeout={500}>
                <Transition>
                    <div className={classes.evtTitleBox}>
                        <h1 className={classes.title}>Events</h1>
                    </div>
                </Transition>
            </CSSTransition>
        }
        {page === 'fundraising' &&
            <CSSTransition key={3} classNames="item" timeout={500}>
                <Transition>
                    <div className={classes.fundTitleBox}>
                        <h1 className={classes.title}>Fundraising</h1>
                    </div>
                </Transition>
            </CSSTransition>
        }
    </TransitionGroup>
    )
}

export default withStyles(TitleBarStyles)(TitleBar);