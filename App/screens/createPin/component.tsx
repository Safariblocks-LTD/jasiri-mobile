
import * as React from 'react';
import {
  ScrollView,
  
} from "react-native";
import { VStack } from "native-base";
import { MyAppText, textStyles } from '../../components/common/appTexts';
import Loader from '../../components/loading'
import { NormalButton } from '../../components/common';
import {
  styles
} from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { RootState, setAccount, setAddress, setErrorMessage, setMnemonic, setroutes } from '../../redux';
import { createAccount, setPassword } from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../../navigation/routes';


export const CreatePin = () => {

  const navigation = useNavigation()
   
  const [loading, setLoading] = React.useState<boolean>()
  const [code, setCode] = React.useState('')
  const [confirmCode, setConfirmCode] = React.useState('') 
  const dispatch = useDispatch()

  const back = useSelector((state: RootState)=>state.routes.back)
  const account = useSelector((state: RootState)=>state.newAccount.account)

  const create=()=>{
    if(code.length === 4 && confirmCode.length === 4 && code === confirmCode){
      
      console.log('matched');
      setLoading(true);

      (async()=>{
          try {  

            
            let accountObject;

            if(back === routes.RECOVER_ACCOUNT){
              accountObject = account
            }else {
              const res = await createAccount({name: 'createAccount'})

              

              accountObject = res
            }

            // console.log(accountObject)


            if(accountObject.errored){
              console.log(accountObject.data)
              console.log('saving error')
              setLoading(false);
              dispatch(setErrorMessage(accountObject.data))
              dispatch(setroutes(routes.CREATE_PASSWORD))
              navigation.navigate(routes.ERROR)
              return
            }
            
           
            
            
            dispatch(setAccount({accountObject}))


            const accountInfo = JSON.stringify({...accountObject, password: code})
            const encrypted = await setPassword({accountInfo, name: 'setPassword'})

            const enc = encrypted

            const data =enc.encrypted
            await AsyncStorage.setItem('accountData', JSON.stringify(data))  
            setLoading(false);
            back === routes.RECOVER_ACCOUNT ? navigation.navigate(routes.LOGIN) : navigation.navigate(routes.SEED_PHRASE)
            dispatch(setroutes(''))
          
          }catch (e) {    
                console.log(e)
                console.log('saving error')
                setLoading(false);
                dispatch(setroutes(routes.CREATE_PASSWORD))
                dispatch(setErrorMessage(e.message))
                navigation.navigate(routes.ERROR)
          }
           
        })()
    }
  }

  const buttonPress = () => {
    create()
  }

  console.log(back)

  React.useEffect(()=>{
    
    create()
  }, [code, confirmCode])

  const styled = {
    heading: (scale) => {
      const fontSize = textStyles.fontSize * scale;

      return {
        lineHeight: fontSize * 1.4,
        marginBottom: 12,
        fontWeight: "bold",
        fontSize,
      };
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Loader loading={loading} />
      <VStack space={10} style={styles.root}>
        <VStack>
          <MyAppText style={styles.title}>Create Pin</MyAppText>
          <SmoothPinCodeInput
            containerStyle={styles.cellContainer}
            cellSpacing={40}
            cellStyle={styles.cell}
            // ref={pinInput}
            value={code}
            onTextChange={code => setCode(code)}
            onFulfill={() => console.log('Do something')}
            onBackspace={() => console.log('No more back.')}
          />
        </VStack>
        <VStack>
          <MyAppText style={styles.title}>Confirm Pin</MyAppText>
          <SmoothPinCodeInput
            containerStyle={styles.cellContainer}
            cellSpacing={40}
            cellStyle={styles.cell}
            // ref={confirmPinInput}
            value={confirmCode}
            onTextChange={confirmCode => setConfirmCode(confirmCode)}
            onFulfill={()=>console.log('Do something')}
            onBackspace={() => console.log('No more back.')}
          />
        </VStack>
        <NormalButton title='Create Pin' clickHandler={buttonPress} style={styles.button} />
      </VStack>
    </ScrollView>
  )
}




