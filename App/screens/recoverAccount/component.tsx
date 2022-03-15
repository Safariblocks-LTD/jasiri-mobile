import * as React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn, setAddress } from '../../redux'
import { recoverAccount } from '../../services'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { setErrorMessage } from '../../redux'
import { NormalButton } from '../../components/common'
import routes from '../../navigation/routes'
import { useNavigation } from '@react-navigation/native'

// let mn = 'dwarf jar wild economy unit subway pottery panic genuine science cabin spell drift toast settle skin business outside note rebel clay wool empower absent merry'


const RecoverAccount = () => {
    const [mnemonic, setMnemonic] = React.useState<string>('forward hat elbow gasp rude oppose apology estate kid rebel book faith perfect glove renew siege planet thing clarify goat security network bounce able you')
    const dispatch = useDispatch()

    const navigation = useNavigation()
    

    const [loading, setLoading] = React.useState<boolean>()
    const [error, setError] = React.useState<string>()
    
    
    const recover=()=>{
        console.log('clicked recover');
        (async()=>{
            console.log('async operation');
            
            try{
                setLoading(true)
                console.log('try');
                const recovered = await recoverAccount(mnemonic)
                

                console.log(recovered.address)
                console.log(recovered.mnemonic)
                await AsyncStorage.setItem('accountData',  JSON.stringify(recovered)) 
                dispatch(setIsLoggedIn(true))
                // dispatch(setAddress(recovered.address))
                // mnemonic && dispatch(setMnemonic(recovered.mnemonic)) 
                navigation.navigate(routes.DASHBOARD)                
                setLoading(false)
            } 
            catch(e) {    
                //
                setLoading(false)
                navigation.navigate(routes.ERROR)
                dispatch(setErrorMessage('error reading value'))
                console.log(' error reading value  ')
                console.log(e)
                // return {error: e}
            }

        })()
        
    }
    const handleInput=(text: string)=>{
        console.log(text)
        setMnemonic(text)
       
    }

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
                        value={mnemonic}
                        onChangeText={handleInput}
                        />
                    </View>
                </View>
                {/* loading */}
               
                <View style={styles.buttonContainer}>
                    <NormalButton style={styles.button} title={'Recover Account'} clickHandler={recover}/>
                </View>
            </View>
         
        </View>
    )
}

export default RecoverAccount
const styles = StyleSheet.create({
container: {
    flex: 1,
},

content: {
    // width: '100%',
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
