
import { BAR_HEIGHT } from '../constants';

const barHeight = BAR_HEIGHT;

const TitleBarStyles = theme =>  ({
    container: {
        overflow: 'hidden',
    },
    scrolling: {
        transform: `translate(0, -${barHeight}px)`,
        transition: 'transform 90ms linear'
    },
    homeTitleBox: {
        color: 'black',
        display: 'flex',
        height: barHeight,
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
        height: barHeight,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background: "linear-gradient(348deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    evtTitleBox: {
        color: 'white',
        display: 'flex',
        height: barHeight,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background: "linear-gradient(108deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    fundTitleBox: {
        color: 'white',
        display: 'flex',
        height: barHeight,
        marginLeft: 0,
        alignItems: 'center',
        padding:"0 20px",
        background: "linear-gradient(228deg, rgba(92,91,182,1) 0%, rgba(205,43,44,1) 51%, rgba(216,105,78,1) 100%)",
    },
    title: {
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: '1.5 px',
    },
});

export default TitleBarStyles;