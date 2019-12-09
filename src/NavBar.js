import React from 'react';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './styles/NavBarStyles';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ScrollTop from './ScrollTop';
import TitleBar from './TitleBar';
import logo from './styles/CU-logo-white-fat.svg';
import NavSlider from './NavSlider';
import NavDropdown from "./NavDropdown";

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
        }
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    showForm() {
        this.setState({ formShowing: true })
    }
    hideForm() {
        this.setState({ formShowing: false })
    }
    handleClick() {
        console.log('clicked');
        this.props.pageChange('');
        this.props.history.push('/');
    };
    //TODO: Find out where pointer-even: none is
    //Can not select or click on anything below the navBar
    render() {
        const {classes, children, page, pageChange } = this.props;
        const {loggedIn } = this.state;
        return (
            <div>
                <header className={classes.NavBar}>
                    <div className={classes.logoDiv}>
                        <img src={logo} alt="logo" className={classes.logo} onClick={this.handleClick}/>
                    </div>
                    <NavSlider classes={{root: classes.insetSlider}} pageChange={pageChange} location={this.props.location} history={this.props.history}/>
                    <div className={classes.NavDropdown}>
                        <NavDropdown  pageChange={pageChange} location={this.props.location} history={this.props.history}/>
                    </div>
                    {loggedIn 
                        ? /* Add account photo w/ drop down menu for profile editing*/
                        <div>You're logged in!</div>
                        : <div className={classes.navBtns}>
                            <LoginForm />
                            <SignUpForm />
                        </div>
                    }
                </header>
                <div className={classes.NavTitleBar} role="banner">
                    <TitleBar page={page} />
                </div>
                <div className={classes.content}>
                    {children}
                </div>
                <ScrollTop {...this.props} />
            </div>
        )
    }
    }

export default withStyles(styles)(NavBar);