import { borderRadius } from "@material-ui/system";

export default {
    root: {
        width: "100%"
    },
    NavBar: {
        display: "flex",
        alignItems: "center",
        height: "70px",
        width: "100%",
        backgroundColor: "#181b1c",
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "30px",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        }
    },
    navBtns: {
        alignItems: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
    }

}