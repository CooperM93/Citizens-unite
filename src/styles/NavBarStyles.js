import sizes from "./sizes";
import { NAV_OFFSET } from '../constants'

const navOffset = NAV_OFFSET;

export default {
    content: {
        marginTop: `${navOffset}px`,
    },
    NavBar: {
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
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
    },
    logo: {
        margin: "0px 10px",
        padding: "0 13px",
        height: "70px",
        width: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& a": {
            textDecoration: "none",
        }
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
    scrollTopFab: {
        backgroundColor: "RGBA(24,27,28,0.85)",
        color: "#9b9e9f",
        "&:hover": {
            backgroundColor: "RGBA(24,27,28,0.93)",
            color: "#9b9e9f",
        }
    }
}