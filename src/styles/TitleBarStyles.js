import sizes from "./sizes";
import { NAV_OFFSET } from '../constants';

const navOffset = NAV_OFFSET;

const TitleBarStyles = theme =>  ({
    container: {
        marginTop: `${navOffset}px`,
        overflow: 'hidden',
    },
    homeTitleBox: {
        color: 'black',
        display: 'flex',
        height: 70,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        backgroundImage: `url(` + require('../imgs/us-cap-cropped.png') + `), linear-gradient(348deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)`,
        backgroundSize: '100%',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
    },
    disTitleBox: {
        color: 'white',
        display: 'flex',
        height: 70,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background:" rgb(92,91,182)",
        background: "linear-gradient(348deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    evtTitleBox: {
        color: 'white',
        display: 'flex',
        height: 70,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background:" rgb(92,91,182)",
        background: "linear-gradient(108deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    fundTitleBox: {
        color: 'white',
        display: 'flex',
        top: '-70px',
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
    },
    /*itemEnter: {
        transform: "translate(0px, -100%)"
    },
    itemEnterActive: {
        transform: "translate(0px, 0%)",
        transition: "transform 500ms ease-in"
    },
    itemExit: {
        transform: "translate(0px, -100%)"
    },
    itemExitActive: {
        transform: "translate(0px, 0px)",
        transition: "transfrom 500ms ease-in"
    }
    */
});

export default TitleBarStyles;