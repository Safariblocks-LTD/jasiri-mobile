
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type navigation = {
    navigation: any
  }

export const CreateAccount = ({navigation}: navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.text}>
                Back up your account using a recovery passphrace 
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Seed Phrase')}>
                    <Text style={styles.account}>I understand</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FEFEFE', 
        // backgroundColor: '#000',
        width: '100%', 
        height: '100%',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
        // borderWidth: 1
        
    },
    textBox: {
        alignItems: 'flex-start',
        width: '100%',
        padding: 20,
        marginBottom: '50%',
        paddingRight: '25%',
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        margin: 15
    },
    text: {
        color: '#000000',
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
        lineHeight: 36
    },
    account: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bold',
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
