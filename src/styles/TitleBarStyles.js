import sizes from "./sizes";
import { NAV_OFFSET } from '../constants'

const navOffset = NAV_OFFSET;

const TitleBarStyles = theme =>  ({
    container: {
        marginTop: `${navOffset}px`
    },
    disTitleBox: {
        display: 'flex',
        height: 70,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background:" rgb(92,91,182)",
        background: "linear-gradient(348deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    evtTitleBox: {
        display: 'flex',
        height: 70,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background:" rgb(92,91,182)",
        background: "linear-gradient(108deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    fundTitleBox: {
        display: 'flex',
        height: 70,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background:" rgb(92,91,182)",
        background: "linear-gradient(228deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    title: {
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: '1.5 px',
        color: 'white',
    },
});

export default TitleBarStyles;