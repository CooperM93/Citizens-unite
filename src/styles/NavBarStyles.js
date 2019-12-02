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
        height: "70px",
        width: "100%",
        backgroundColor: "#181b1c",
    },
    logo: {
        marginRight: "15px",
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
        "& :hover": {
            color: "white",
            backgroundColor: "RGBA(24,27,28,0.85)",
        }
    }
}