import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10
    },

    first: {
        // marginTop: 20,
        //   height: '25%',
        backgroundColor: '#AAC8C2',
        width: '85%',
        borderRadius: 35,
        display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'space-around',
        alignItems: 'center'
    },
    section1: {
        marginTop: 17,
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'flex-start',
        width: '90%',
    },

    section2: {
        //   justifyContent: 'flex-start',
        width: '80%',
        padding: 10,
        //   borderWidth: 1

    },
    section1Text1: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5
    },

    section2Text2: {
        //   marginTop: 15,
        //   width: 250,
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal'
    },
    second: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#AAC8C2',
        width: '85%',
        borderRadius: 35,
        flexBasis: 200
    },
    list1: {
        //   marginTop: 30,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        maxHeight: 300,
        flexGrow: 1,
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal'
    },
    item: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    third: {
        height: '25%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 300,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3BD5C2',
        margin: 20
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }

})
