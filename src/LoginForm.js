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

export default function LoginForm(props) {
    const [password, handlePasswordChange] = useFormState("");
    const [email, updateEmail] = useFormState("");
    const [isOpen, toggleOpen] = useToggle(false);
    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" onClick={toggleOpen} className={classes.button}>
                Login
            </Button>
            <Dialog open={isOpen} onClose={toggleOpen} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To login enter your email and password!
                    </DialogContentText>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
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
                Login
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    )

}
