import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/HomePageStyles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.props.pageChange(e.target.value)
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.HomePage}>
                <div className={classes.titleAndSubheader}>
                    <Typography variant="h1" align='center' classes={{h1: classes.h1}} className={classes.title}>Citizens Unite!</Typography>
                    <Typography align='center' className={classes.subheader}>
                        Your one stop shop for political activism. Utilizing the power of social media, crowdfunding, and online event planning to empower YOUR free speech and bring a more perfect democracy. 
                    </Typography>
                </div>
                    <div className={classes.body}>
                        <div className={`${classes.section} ${classes.one}`}>
                            <div className={classes.headerAndButton}>
                                <Typography variant="h6" className={classes.sectionBodyHeader}>
                                    A place to discuss ideas
                                </Typography>
                                <Link to={"/discussions"} onClick={this.handleClick} className={classes.Link}>
                                    <Button variant='outlined' value='discussions' className={classes.button}>Talk</Button>
                                </Link>
                                <Typography variant="body1" className={classes.sectionBodyUnder}>
                                    Give your input on how government should run. What's wrong and how could we improve as a nation.
                                </Typography>
                            </div>
                            <Typography variant="body1" className={classes.sectionBodyRight}>
                                Give your input on how government should run. What's wrong and how could we improve as a nation.
                            </Typography>
                        </div>
                        <div className={`${classes.section} ${classes.two}`}>
                            <div className={classes.headerAndButton}>
                                <Typography variant="h6" className={classes.sectionBodyHeader}>
                                    To organize events.
                                </Typography>
                                <Link to={"/events"} onClick={this.handleClick} className={classes.Link}>
                                    <Button variant='outlined' value='events' className={classes.button}>Get Together</Button>
                                </Link>
                                <Typography variant="body1" className={classes.sectionBodyUnder}>
                                    Have something to say? Plan a speech. Want to be heard? Plan a protest. Let's get together and make a difference.
                                </Typography>
                            </div>
                            <Typography variant="body1" className={classes.sectionBodyRight}>
                                Have something to say? Plan a speech. Want to be heard? Plan a protest. Let's get together and make a difference.
                            </Typography>
                        </div>
                        <div className={`${classes.section} ${classes.three}`}>
                            <div className={classes.headerAndButton}>
                                <Typography variant="h6" className={classes.sectionBodyHeader}>
                                    And to speak with you money.
                                </Typography>
                                <Link to={"/fundraising"} onClick={this.handleClick} className={classes.Link}>
                                    <Button variant='outlined' value='fundraising' className={classes.button}>Support</Button>
                                </Link>
                                <Typography variant="body1" className={classes.sectionBodyUnder}>
                                    In the supreme court case Citizens United vs. FEC it was ruled that the free speech clause of the First Amendment forbids the government from limiting campaign contributions. Lets put our money where our mouths are and make our voices heard. Fund something or someone you think can make a difference.
                                </Typography>
                            </div>
                            <Typography variant="body1" className={classes.sectionBodyRight}>
                                In the supreme court case Citizens United vs. FEC it was ruled that the free speech clause of the First Amendment forbids the government from limiting campaign contributions. Lets put our money where our mouths are and make our voices heard. Fund something or someone you think can make a difference.
                            </Typography>
                        </div>
                    </div>
                <Typography variant="h1" align='center' classes={{root: classes.sectionHeader}}><span></span></Typography>
            </div>
        )
    }
}

export default withStyles(styles)(HomePage);