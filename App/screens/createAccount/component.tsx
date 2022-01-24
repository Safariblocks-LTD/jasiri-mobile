
import * as React from 'react'
import { View, Text, StyleSheet, Image, Modal } from 'react-native'
import {getFocusedRouteNameFromRoute} from "@react-navigation/native"
import { TouchableOpacity } from 'react-native-gesture-handler'


export const CreateAccount = ({navigation}) => {

    // const handleClick=()=>{
    //     navigation.navigate('Seed Phrase')
    //     console.log('Button click')
    // }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                  <Image 
                    source={require('../../assets/Vector.png')}
                    style={{height: 150, width: 150}}
                   />
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                     Back up your account using a recovery passphrace 
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        >
                        <Text style={styles.account} onPress={() => navigation.navigate('Seed Phrase')}>I understand</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
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
