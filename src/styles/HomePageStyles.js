import sizes from './sizes';
import bg from './CU-logo-mnml.png'

export default {
    HomePage: {
        padding: '32px',
    },
    title: {
        fontWeight: '700',
        fontSize: 'calc(5vw + 30px)',
        paddingBottom: '32px',
    },
    subheader: {
        fontWeight: '500',
        fontSize: '18px',
        marginBottom: '32px',
        maxWidth: '1000px',
        width: '80%'
    },
    titleAndSubheader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundImage: `url(${bg})`,
        //backgroundSize: '40px 40px',
    },
    sectionHeader: {
        fontWeight: '400',
        fontSize: 'calc(4vw + 25px)',
        paddingTop: '32px',
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: '1200px',
        flexDirection: 'column',
        [sizes.up("xs")]: {
            width: '80%',
        }
    },
    sectionBodyHeader: {
        fontWeight: 600,
        fontSize: '20px'
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '64px',
        width: '100%',
        [sizes.down("xs")]: {
            justifyContent: 'center',
        }
    },
    one: {
        //red gradient
        background: 'rgb(135,0,0)',
        background: 'linear-gradient(208deg, rgba(238,126,112,.9) 0%, rgba(223,78,69,1) 100%)',
    },
    two: {
        //green gradient
        background: 'rgb(66,192,159)',
        background: 'linear-gradient(208deg, rgba(123,209,182,.9) 0%, rgba(0,116,85,1) 100%)',
    },
    three: {
        //purple gradient
        background: 'RGB(174, 166, 254)',
        background: 'linear-gradient(208deg, rgba(196,187,255,.9) 0%, RGB( 92, 91, 181) 100%)',
    },
    headerAndButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '300px'
    },
    sectionBodyRight:{
        [sizes.down("xs")]: {
            display: 'none'
        },
        marginBottom: '30px',
        [sizes.down("md")]: {
            maxWidth: '325px',
        },
        maxWidth: '525px',
        fontWeight: 500,
    },
    sectionBodyUnder: {
        [sizes.up("xs")]: {
            display: 'none'
        },
        marginTop: '32px',
        maxWidth: '300px',
        fontWeight: 500,
    },
    button: {
        color: 'white',
        backgroundColor: 'none',
        borderColor: 'white',
        whiteSpace: 'nowrap',
        transition: "all .3s ease",
        margin: '16px',
        "&:hover": {
            textShadow: '1px 1px 7px #000',
            backgroundColor: '#181b1c',
            color: 'white',
            boxShadow: 'inset 1px 1px 7px #000',
        }
    },
    Link: {
        textDecoration: 'none'
    }
}
