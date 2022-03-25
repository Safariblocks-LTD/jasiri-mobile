
import * as React from 'react';
import {
 
  ScrollView,
  TouchableOpacity} from "react-native";
import { Center, VStack } from "native-base";
import { MyAppText, textStyles } from '../../components/common/appTexts';
import Loader from '../../components/loading'
import { NormalButton } from '../../components/common';
import {
  styles
} from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn, setAddress, setMnemonic, setErrorMessage, setroutes } from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAccount, setPassword, loginAccount } from '../../services';



export const Login = () => {
  const [loading, setLoading] = React.useState<boolean>()
  const [code, setCode] = React.useState('')

  const [encrypted, setEncrypted] = React.useState('');
 
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  React.useEffect(()=>{
    (async () => {  
      try {    
          const jsonValue = await AsyncStorage.getItem('accountData')  
          console.log('hex:-------------', jsonValue)
          setEncrypted(jsonValue)
         
      } 
      catch(e) {    
          //
          console.log(' error reading value  ')
      }})();
  }, [])



  const loginAcc=()=>{
    if(code.length === 4){
      
      console.log('matched');
      setLoading(true);

      (async()=>{
          try {  
            console.log('encrypted: -----------------',encrypted)
            const res = await loginAccount({name: 'loginAccount', accountInfo: {encrypted: encrypted, password: code}})

            const resObject = JSON.parse(res)

            if(resObject.errored){
              console.log(resObject.data)
              console.log('saving error')
              setLoading(false);
              dispatch(setErrorMessage(resObject.data))
              dispatch(setroutes(routes.LOGIN))
              navigation.navigate(routes.ERROR)
              return
            }

            const decrypted = JSON.parse(resObject.decrypted)

            const {address, mnemonic} = decrypted

              
            dispatch(setAddress(address));
            dispatch(setMnemonic(mnemonic));
            
            
           
            setLoading(false);
            navigation.navigate(routes.DASHBOARD)
          }catch (e) {    
                console.log(e)
                console.log('saving error')
                setLoading(false);
                dispatch(setroutes(routes.LOGIN))
                dispatch(setErrorMessage(e.message))
                navigation.navigate(routes.ERROR)
          }
           
        })()
    }
  }

  const handlePin=()=>{
     loginAcc()

  }


  return (
      <ScrollView style={styles.container}>
        <Loader loading={loading} />
        <VStack space={10} style={styles.root}>
          <VStack>
            <MyAppText style={styles.title}>To access your account, please enter your 4-digit Pin</MyAppText>
            <SmoothPinCodeInput
              containerStyle={styles.cellContainer}
              cellSpacing={40}
              cellStyle={styles.cell}
              // ref={pinInput}
              value={code}
              onTextChange={code => setCode(code)}
              onFulfill={() => console.log('Do something.')}
              onBackspace={() => console.log('No more back.')}
            />
          </VStack>
          <NormalButton title='Login' style={styles.button} clickHandler={handlePin}/>
          <Center style={styles.down}>
          <TouchableOpacity onPress={() => navigation.navigate(routes.RECOVER_ACCOUNT)}>
              <MyAppText style={styles.footer}>Forgot Pin?</MyAppText>
            </TouchableOpacity>  
          </Center>
        </VStack>
      </ScrollView>
  )
}




