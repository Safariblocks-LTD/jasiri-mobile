import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CreateAccount = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#FEFEFE', width: '100%', height: '100%'}}>
            <View style={styles.textBox}>
                <Text style={styles.text}>
                Back up your account using a recovery passphrace 
                </Text>
            </View>
        
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={styles.account}>I understand</Text>
                </TouchableOpacity>
        </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        width: 288,
        height: 104,
        top: 354,
        flex: 1,
        left: 23
    },
    text: {
        // position: 'absolute',
        left: '6.13%',
        right: '17.07%',
        // top: '1.6%',
        bottom: '8.6%',
        color: '#000000',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 36
    },
    account: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20,
        fontStyle: 'normal',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#3BD5C2',
        padding: 10,
        width: 325,
        left: 50,
        bottom: 30,
        height: 42,
        borderRadius: 15,
      },
})

