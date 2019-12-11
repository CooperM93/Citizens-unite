import { PROGRESS_BAR_HEIGHT } from '../constants.js';

const progressBarHeight = PROGRESS_BAR_HEIGHT;

export default {
    ProgressBarContainer: {
        margin: '0',
        marginTop: '15px',
        justifyContent: 'flex-center',
        alignContent: 'center',
        width: '100%',
        height: progressBarHeight,
        backgroundColor: 'RGB(224,226,226)',
        borderRadius: progressBarHeight/2,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        backgroundColor: 'RGB(0, 161, 126)',
        width: 0
    }
}