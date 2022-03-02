
import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setAddress, setMnemonic } from '../../redux'
import { createAccount } from '../../services'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NormalButton } from '../../components/common'



export const CreateAccount = ({navigation}) => {
    const dispatch = useDispatch()
    const handleClick=()=>{
        
        const account = createAccount()
        dispatch(setAddress(account.address));
        dispatch(setMnemonic(account.mnemonic));
        // console.log(account.mnemonic);

      (async()=>{
            try {    
                await AsyncStorage.setItem('accountData', JSON.stringify({address: account.address, mnemonic: account.mnemonic}))  
            }catch (e) {    
                // saving error  }
                console.log('saving error')
        }})()
        
        // console.log('Button click')
        navigation.navigate('Seed Phrase')
    }

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
                    <NormalButton
                        title='I understand'
                        style={styles.button}
                        clickHandler={handleClick}
                        />
                      
                    
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
