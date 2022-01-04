import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CreateAccount = ({navigation}) => {
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
                onPress={() => navigation.navigate('Dashboard')}>
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
       
        // height: 104,
        // top: 354,
        // flex: 1,
        // left: 23
        // borderWidth: 1
    },
    buttonContainer: {
        width: '80%',
        // borderWidth: 1,
        // alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 15
        
       
    },
    text: {
        // position: 'absolute',
        // left: '6.13%',
        // right: '17.07%',
        // // top: '1.6%',
        // bottom: '8.6%',
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
        // textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        // lineHeight: 20,
        // fontStyle: 'normal',
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

