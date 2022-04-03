
import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setAddress, setMnemonic, setroutes } from '../../redux'
import { createAccount } from '../../services'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NormalButton } from '../../components/common'


import { styles } from './styles'
import routes from '../../navigation/routes'
import { useNavigation } from '@react-navigation/native'

export const CreateAccount = () => {
    const dispatch=useDispatch()
    const navigation = useNavigation()
   
    const handleClick=()=>{
    dispatch(setroutes('Create account'))
    navigation.navigate(routes.CREATE_PASSWORD)

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


