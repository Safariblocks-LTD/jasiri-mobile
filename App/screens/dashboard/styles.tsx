import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
       flex: 1,
        padding: 10,
       backgroundColor:"#F2EDED"
    },
    
    container: {
       
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
        padding: 20,
        borderWidth: 1,
        borderColor: '#000000',
    },

    info: {
        backgroundColor: '#F8FDFD',
        minHeight: '20%',
        margin: 10,
        width: '85%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000000',
    },

    quickActions: {
        // backgroundColor: '#fff',
        // minHeight: '20%',
        paddingTop:30,
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
        width: 100,
        // height: 60,
        borderRadius: 15,
        paddingBottom: 10,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    tinyText:{
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    }
})