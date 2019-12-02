
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      marginRight: theme.spacing(1),
      color: '#9b9e9f',
      backgroundColor: 'none',
      borderColor: 'white',
      whiteSpace: 'nowrap',
      transition: "all 5s ease",
      "& :hover": {
        color: 'white'
      }
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