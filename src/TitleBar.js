import React from 'react'
import TitleBarStyles from './styles/TitleBarStyles';
import Transition from './Transition';
import HideOnScroll from './HideOnScroll';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//create a function to hide titlebar when you scroll down
function TitleBar(props) {
    const { classes, page } = props;
    return (
        <HideOnScroll>
        <TransitionGroup className={classes.container}>
            {page === '' &&
                <CSSTransition key={0} classNames="item" timeout={500}>
                    <Transition>
                    <div className={classes.homeTitleBox} aria-label="Home">
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
        </HideOnScroll>
    )
}

export default withStyles(TitleBarStyles)(TitleBar);