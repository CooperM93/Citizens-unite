import sizes from "./sizes";

const pageStyles = theme =>  ({
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
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '20px'
    },
});

export default pageStyles;