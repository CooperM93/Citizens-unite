import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/NavBarStyles';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
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
        const {classes} = this.props;
        const {loggedIn} = this.state;
        return (
            <div className={classes.root}>
                <header className={classes.NavBar}>
                    <div className={classes.logo}>
                        <Link to='/'>CU</Link>
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
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);