import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/HomePageStyles';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.HomePage}>
                <Typography variant="h1" align='center' classes={{h1: classes.h1}} className={classes.title}>Citizens Unite!</Typography>
                    <Typography variant="h6" className={classes.subheader}>
                        Your one stop shop for political activism. Utilizing the power of social media, crowdfunding, and online event planning to empower YOUR free speech and bring a more perfect democracy. 
                    </Typography>
                    <div className={classes.sections}>
                        <div className={classes.section1}>
                            <div className={classes.headerAndButton}>
                                <Typography variant="h6" className={classes.bodyHeader}>
                                    A place to discuss ideas
                                </Typography>
                                <Button variant='outlined' className={classes.button}>Let's Talk</Button>
                                <Typography variant="body1" className={classes.bodyUnder}>
                                    Give your input on how government should run. What's wrong and how could we improve as a nation.
                                </Typography>
                            </div>
                            <Typography variant="body1" className={classes.bodyRight}>
                                Give your input on how government should run. What's wrong and how could we improve as a nation.
                            </Typography>
                        </div>
                        <div className={classes.section2}>
                            <div className={classes.headerAndButton}>
                                <Typography variant="h6" className={classes.bodyHeader}>
                                    To organize events.
                                </Typography>
                                <Button variant='outlined' className={classes.button}>Let's Get Together</Button>
                                <Typography variant="body1" className={classes.bodyUnder}>
                                    Have something to say? Plan a speech. Want to be heard? Plan a protest. Let's get together and make a difference.
                                </Typography>
                            </div>
                            <Typography variant="body1" className={classes.bodyRight}>
                                Have something to say? Plan a speech. Want to be heard? Plan a protest. Let's get together and make a difference.
                            </Typography>
                        </div>
                        <div className={classes.section3}>
                            <div className={classes.headerAndButton}>
                                <Typography variant="h6" className={classes.bodyHeader}>
                                    And to speak with you money.
                                </Typography>
                                <Button variant='outlined' className={classes.button}>Let's Support</Button>
                                <Typography variant="body1" className={classes.bodyUnder}>
                                    In the supreme court case Citizens United vs. FEC it was ruled that the free speech clause of the First Amendment forbids the government from limiting campaign contributions. Lets put our money where our mouths are and make our voices heard. Fund something or someone you think can make a difference.
                                </Typography>
                            </div>
                            <Typography variant="body1" className={classes.bodyRight}>
                                In the supreme court case Citizens United vs. FEC it was ruled that the free speech clause of the First Amendment forbids the government from limiting campaign contributions. Lets put our money where our mouths are and make our voices heard. Fund something or someone you think can make a difference.
                            </Typography>
                        </div>
                    </div>
                <Typography variant="h1" align='center' className={classes.sectionText}>What's<span> Going On?</span></Typography>
            </div>
        )
    }
}

export default withStyles(styles)(HomePage);