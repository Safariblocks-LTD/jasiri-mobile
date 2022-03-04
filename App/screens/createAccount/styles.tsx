import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },

    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 40,
    },
    textBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 70
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        margin: 15,
        marginBottom: 40
    },
    text: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 25,
    },
    account: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 18,
      },

      button: {
        alignItems: 'center',
        backgroundColor: '#3BD5C2',
        padding: 10,
        width: '100%',
        height: 42,
        borderRadius: 15,
      },
})