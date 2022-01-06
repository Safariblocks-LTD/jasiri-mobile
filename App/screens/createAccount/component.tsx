import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type navigation = {
    navigation: any
  }

export const CreateAccount = ({navigation}: navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.graphic}>
                    <Text style={styles.graphicText}>the graphics here</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                    Back up your account using a recovery passphrace
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Seed Phrase")}>
                        <Text style={styles.account}>I understand</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,  
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#FEFEFE'
    },

    content: {
    borderWidth: 1,
    alignItems: 'center'
    },

    graphic: {
    width: '100%',
    height: '40%',
    },

    graphicText: {
    color: 'black'
    },

    textBox: {
        width: '100%',
        height: '30%',
        padding: 20,
    },

    text: {
        color: '#000000',
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
    },

    buttonContainer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        marginTop: 80,
        alignItems: 'center',
        backgroundColor: '#3BD5C2',
        padding: 10,
        width: 320,
        height: 42,
        borderRadius: 15,
      },

    account: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
      },
})

