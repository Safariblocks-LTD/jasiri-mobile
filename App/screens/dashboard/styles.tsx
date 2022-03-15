import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
       flex: 1,
        padding: 10,
       backgroundColor:"#F2EDED"
    },
    
    container: {
        // flex: 1,
        alignItems: 'center',
        height: 800,
        // borderWidth: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30,
        fontWeight: 'bold'
    },
    balanceText: {
        fontWeight: 'bold'
    },
    balance: {
        backgroundColor: '#F8FDFD',
        minHeight: '10%',
        margin: 5,
        width: '85%',
        borderRadius: 20,
        padding: 20
    },

    info: {
        backgroundColor: '#F8FDFD',
        minHeight: '20%',
        margin: 10,
        width: '85%',
        borderRadius: 20
    },

    quickActions: {
        // backgroundColor: '#fff',
        // minHeight: '20%',
        margin: 10,
        width: '85%',
        // borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    quickActionsItem: {
        backgroundColor: '#F8FDFD',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 60,
        borderRadius: 20,
        paddingBottom: 10,
        paddingTop: 10,
    },
    tinyText:{
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    }
})