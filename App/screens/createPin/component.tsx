
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
import { setAddress, setMnemonic } from '../../redux';
import { createAccount, setPassword } from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import routes from '../../navigation/routes';


export const CreatePin = () => {

  const navigation = useNavigation()
   
  const [loading, setLoading] = React.useState<boolean>()
  const [code, setCode] = React.useState('')
  const [confirmCode, setConfirmCode] = React.useState('') 
  const dispatch = useDispatch()

  const buttonPress = () => {
    
  }

 

  React.useEffect(()=>{
    if(code.length === 4 && confirmCode.length === 4 && code === confirmCode){
      
      console.log('matched');

      (async()=>{
            const account = await createAccount({name: 'createAccount'})
            
            const accountObject = JSON.parse(account)

            
            
            dispatch(setAddress(accountObject.address));
            dispatch(setMnemonic(accountObject.mnemonic));


            const accountInfo = JSON.stringify({...accountObject, password: code})
            const encrypted = await setPassword({accountInfo, name: 'setPassword'})

            console.log(encrypted)
            
            try {  
               

                await AsyncStorage.setItem('accountData', JSON.stringify(accountObject))  
            }catch (e) {    
                // saving error  }
                console.log('saving error')
            }

            //  navigation.navigate(routes.SEED_PHRASE)
        })()
    }
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




