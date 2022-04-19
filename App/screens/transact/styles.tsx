import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        container: {
        padding: 20,
        flex: 1,
        paddingTop: 40,
        // marginTop: 20,
        // backgroundColor: '#E3E8E7',
        height: 800,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    unitname: {
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'uppercase',
        margin: 5
    },

    tokensContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },

    assetButton: {
        alignContent: 'flex-start'
    },

    tokenContainer: {
        borderRadius: 5,
        width: '90%',
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',
    },
    unitAmount: {
        marginLeft: 40,
        fontWeight: 'bold'
    },

    unitInUsd: {
        marginLeft: 40,
        fontWeight: 'bold'
    },
    account: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#3BD5C2',
        padding: 10,
        width: '60%',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
})