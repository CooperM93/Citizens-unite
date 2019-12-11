

export default {
    referencePoint: {
        position: 'absolute',
    },
    container: {
        position: 'absolute',
        top: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        justifySelf: 'left'
    },
    Tooltip: {
        marginLeft: '-100%',
        width: 0,
        height: 0,
        borderLeft: '6px solid transparent',
        borderBottom: '6px solid RGB(224,226,226)',
        borderRight: '6px solid transparent',
        zIndex: 5,
    },
    TooltipBox: {
        //offset = height of arrow + padding
        marginLeft: '-100%',
        fontSize: '12px',
        color: 'RGB(24,27,28)',
        padding: '5px',
        backgroundColor: 'RGB(224,226,226)',
        borderRadius: '6px',
    }
}
