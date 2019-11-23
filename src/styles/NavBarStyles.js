import sizes from "./sizes";

export default {
    NavBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        width: "100%",
        backgroundColor: "#181b1c",
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        height: "50px",
        width: "50px",
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
    }
}