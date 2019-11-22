
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(1),
      color: 'white',
      borderColor: 'white'
    },
    input: {
      display: 'none',
    },
    form: {
        display: 'inline',
        justifyContent: 'flex-end'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
  }),
);

export default useStyles;

/*
const styles = theme => ({
    form: {
        display: 'inline',
        justifyContent: 'flex-end'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    btn: {
        margin: "0 10px",
    },
});
*/