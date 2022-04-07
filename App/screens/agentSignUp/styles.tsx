import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F2EDED",
        
    },
    box: {
        opacity:0.6
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        alignItems: "center",
        // borderWidth: 1
    },

    textbox: {
        marginTop: 30,
        alignItems: "center",
        width: "60%",
        justifyContent: "center",
        //    borderWidth: 1
    },

    text: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "normal"
    },

    main: {
        //    borderWidth: 1,
        width: "100%",
        alignItems: "flex-start",
        paddingLeft: 30,
        justifyContent: "space-around",
        height: "30%",
    },

    up: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    icon1: {
        marginRight: 30,
    },

    iconText: {
        // marginRight: 120,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal"
    },
    iconText2: {
        // marginRight: 60,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal"
    },

    icon2: {},

    divider: {
        marginLeft: 60,
        width: "68%",
        borderWidth: 1,
        backgroundColor: "black",
    },
    down: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    footer: {
        marginTop: '35%',
    },

    footerText: {
        color: "black",
        alignItems: "flex-end",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 14,
    },
    button: {
        height: 40,
        width: '40%',
        borderRadius: 10,
        // marginTop: '25%',
        // alignSelf: 'center',
        // margin: 40

        // jus
    },
    root: {
        paddingTop: 50,
    },
    title: {
        paddingTop: 20,
        paddingBottom:10,
        color: '#000',
        fontSize: 20,
        // fontWeight: '700',
        // textAlign: 'center',
    },

    cell: {
        backgroundColor: '#FFF7F7',
        borderRadius: 10
    },
    cellContainer: {
        borderRadius: 10,
        marginLeft: 30

    },
    
});
