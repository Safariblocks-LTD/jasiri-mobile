
import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setAddress, setMnemonic } from '../../redux'
import { createAccount } from '../../services'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NormalButton } from '../../components/common'


import { styles } from './styles'

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
                     Back up your account{'\n'}using a recovery {'\n'}passphrase 
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


