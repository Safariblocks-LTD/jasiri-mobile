import * as React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const RecoverAccount = () => {
    return (
        <View style={styles.container} >
            <Modal>
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
                         Recover Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </View>
    )
}

export default RecoverAccount
const styles = StyleSheet.create({
container: {
    flex: 1,
},

content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
},

mainContent: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
},

title: {
    marginTop: 10,
    backgroundColor: '#E9E9E9',
    width: '80%',
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
    width: '80%',
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
   height: 40,
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
