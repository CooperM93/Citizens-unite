import { PROGRESS_BAR_HEIGHT } from '../constants.js';

const progressBarHeight = PROGRESS_BAR_HEIGHT;

export default {
    referencePoint: {
        position: 'absolute',
    },
    container: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Tooltip: {
        width: 0,
        height: 0,
        //offset below bar
        // off set for size of arrow to center it
        borderLeft: '6px solid transparent',
        borderBottom: '6px solid gray',
        borderRight: '6px solid transparent',
        zIndex: 5,
    },
    TooltipBox: {
        //offset = height of arrow + padding
        fontSize: '8px',
        padding: '3px',
        backgroundColor: 'gray',
        borderRadius: '6px',
    }
}
