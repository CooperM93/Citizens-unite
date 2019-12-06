import sizes from "./sizes";
import { NAV_OFFSET, BAR_HEIGHT } from '../constants'

const navOffset = NAV_OFFSET;
const barHeight = BAR_HEIGHT;

export default {
    content: {
        position: "relative",
        marginTop: `${navOffset}px`,
        paddingTop: `${barHeight}px`,
        pointerEvents: 'auto',
    },
    NavBar: {
        display: "flex",
        position: "fixed",
        alignItems: "center",
        zIndex: '3',
        marginTop: `-${navOffset}px`,
        minHeight: `${navOffset}px`,
        height: 'auto',
        width: "100%",
        backgroundColor: "#181b1c",
        overflow: 'hidden',
        marginBottom: 0,
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        justifyContent: 'space-between'
    },
    NavTitleBar: {
        zIndex: '2',
        position: "fixed",
        display: "flex",
        height: barHeight,
        width: "100%"
    },
    NavDropdown: {
        margin: "0px 10px",
        padding: "0 13px",
        alignItems: "center",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        [sizes.up("xs")]: {
            display: 'none'
        }
    },
    logoDiv: {
        height: "70px",
        width: "70px",
        margin: "0px 10px",
        padding: "0 13px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        [sizes.down("xs")]: {
            display: "none"
        },
        "& a": {
            textDecoration: "none",
        }
    },
    logo: {
        alignItems: "center",
        height: "45px",
        width: "45px",
    },
    navBtns: {
        alignItems: "center",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    insetSlider: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-center",
        [sizes.down("md")]: {
            display: "none"
        }
    },
}