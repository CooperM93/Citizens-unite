import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './styles/NavBarStyles';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ScrollTop from './ScrollTop';
import logo from './styles/CU-logo-white-fat.svg';
import NavSlider from './NavSlider';
import NavDropdown from "./NavDropdown";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from 'clsx';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            scroll: false,
        }
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }
    showForm() {
        this.setState({ formShowing: true })
    }
    hideForm() {
        this.setState({ formShowing: false })
    }
    render() {
        const {classes, children} = this.props;
        const {loggedIn, scroll} = this.state;
        return (
            <div>
                <CssBaseline />
                <header className={classes.NavBar}>
                    <Link to='/'>
                        <img src={logo} alt="logo" className={classes.logo}>
                        </img>
                    </Link>
                    <NavSlider classes={{root: classes.insetSlider}} pageChange={this.props.pageChange} location={this.props.location} history={this.props.history}/>
                    <NavDropdown pageChange={this.props.pageChange} location={this.props.location} history={this.props.history}/>
                    {loggedIn 
                        ? /* Add account photo w/ drop down menu for profile editing*/
                        <div>You're logged in!</div>
                        : <div className={classes.navBtns}>
                            <LoginForm />
                            <SignUpForm />
                        </div>
                    }
                </header>
                <div className={classes.content}>
                    {children}
                </div>
                <ScrollTop {...this.props} classes={{root: classes.scrollTopFab}}>
                    <Fab  size="small" variant='extended' aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);