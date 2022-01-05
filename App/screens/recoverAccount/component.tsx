import * as React from 'react'
<<<<<<< HEAD
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const RecoverAccount = () => {
    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <View style={styles.mainContent}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                    Enter your passphrase to restore wallet
                    </Text>
                </View>
                <View style={styles.textInput}>
                    <TextInput 
                      style={styles.input}
                      placeholder = "Enter or paste you passphrase"
                      placeholderTextColor = "black"
                      autoCapitalize = "none"
                    ></TextInput>
                </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text 
                        style = {styles.buttonText}
                        >
<<<<<<< HEAD
                         Recover Account
=======
                            Recover Account
>>>>>>> a14de56 (added a seed phrase page)
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
=======
import { View, Text } from 'react-native'

const RecoverAccount = () => {
    return (
        <View>
            <Text>
                Welcome user you can recover your account here
            </Text>
>>>>>>> 0367ad5 (created account recovery page)
        </View>
    )
}

export default RecoverAccount
<<<<<<< HEAD

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
},
content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
},
mainContent: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
},
title: {
    backgroundColor: '#E9E9E9',
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center'
},
titleText: {
 color: 'black',
 padding: 10,
},
textInput: {
    marginTop: 55,
    backgroundColor: '#E9E9E9',
    width: 300,
    height: 300,
    borderRadius: 5,
    alignItems: 'center'
},
input: {
    padding: 10,
    width: '100%'
},
buttonContainer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
},
button: {
   width: 300,
   height: 42,
   borderRadius: 15,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#3BD5C2'
},
buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
}
})
=======
>>>>>>> 0367ad5 (created account recovery page)
