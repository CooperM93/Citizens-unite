import React from 'react'
import useFormState from './hooks/FormHook';
import useToggle from './hooks/Toggler';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './styles/FormStyles';

export default function SignUpForm(props) {
    const [password, handlePasswordChange] = useFormState("");
    const [email, updateEmail] = useFormState("");
    const [isOpen, toggleOpen] = useToggle(false);
    const classes = useStyles();

    return (
        <div className={classes.form}>
            <Button variant="outlined" onClick={toggleOpen} className={classes.button}>
                Sign Up
            </Button>
            <Dialog open={isOpen} onClose={toggleOpen} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To make a new account enter a valid email and create a password!
                    </DialogContentText>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            required
                            id="outlined-basic"
                            label="Username"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={updateEmail}
                        />
                        <TextField
                            required
                            id="outlined-basic"
                            label="Verify Username"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={updateEmail}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={handlePasswordChange}
                        />
                    </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleOpen} color="primary">
                Cancel
                </Button>
                <Button onClick={toggleOpen} color="primary">
                Sign Up
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    )

}
