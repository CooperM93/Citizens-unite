import sizes from './sizes';

export default {
    HomePage: {
        padding: '30px'
    },
    title: {
        fontWeight: '500',
        fontSize: 'calc(5vw + 30px)',
        paddingBottom: '30px',
    },
    h1: {
        WebkitBackgroundClip: 'text',
        background: 'linear-gradient(208deg, rgba(205,43,44,1) 0%, rgba(255,255,255,1) 100%)'
    },
    sectionText: {
        fontWeight: '400',
        fontSize: 'calc(4vw + 25px)',
        marginTop: '30px',
    },
    subheader: {
        marginBottom: '30px'
    },
    sections: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },
    section1: {
        alignSelf: 'left',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    section2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    section3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerAndButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '300px'
    },
    bodyHeader: {
        maxWidth: '300px',
    },
    bodyRight:{
        [sizes.down("sm")]: {
            display: 'none'
        },
        marginBottom: '30px',
        maxWidth: '500px',
    },
    bodyUnder: {
        [sizes.up("sm")]: {
            display: 'none'
        },
        marginBottom: '30px',
        maxWidth: '300px',
    },
    button: {
        color: '#9b9e9f',
        backgroundColor: 'none',
        borderColor: 'white',
        whiteSpace: 'nowrap',
        transition: "all 5s ease",
        margin: '10px',
        "& :hover": {
        color: 'white'
        }
    }
}
