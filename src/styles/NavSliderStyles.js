
import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';

const useStyles = makeStyles({
    root: {
        width: 500,
        height: 70,
        backgroundColor: "#181b1c",
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    icon: {
        color: "#9b9e9f",
        "&$selected": {
            color: "white"
        }
    },
    selected: {
        color: "white",
        fill: "white"
    },
    //switches to navdropdown when screen is narrow
});

export default useStyles;