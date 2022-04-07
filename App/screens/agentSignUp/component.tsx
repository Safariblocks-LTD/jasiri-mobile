
import * as React from 'react';
import {
 
  ScrollView,
  TouchableOpacity} from "react-native";
import { Center, VStack, Box, Stack, Input, FormControl, HStack } from "native-base";
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



export const AgentSignUp = () => {
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






  return (
      <ScrollView style={styles.container}>
      <Loader loading={loading} />
      <Center>
        <MyAppText style={styles.title}>Agent Sign-up code</MyAppText>
        <VStack space={4}>
          <Center style={styles.down}>
            <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg" _text={{
              fontSize: "md",
              fontWeight: "medium",
              color: "warmGray.50",
              textAlign: "center"
            }}>
              <MyAppText>Please enter your phone number to receive your unique code</MyAppText> 
            </Box>
          </Center>
          <VStack>          
              <>
                {/* <Stack space={4} w="100%"> */}
                  < >
                    <HStack space={4}>
                  <Input variant="outline" bg="#D1FDE2" placeholder="0700000000" w="45%" />
                  <NormalButton title='Send' style={styles.button} clickHandler={navigation.navigate("Agent")} />
                    </HStack>                
                  </> 
                {/* </Stack> */}
            </>
            <Center mt={10}>
              <Input variant="outline" bg="#D1FDE2" placeholder="Enter Code" w="100%" />
            </Center>
            <Center mt={10}>
              <NormalButton title='Confirm' style={styles.button} clickHandler={navigation.navigate("AgentSignUp")} />
            </Center>
          </VStack>
        </VStack>
      </Center>

      </ScrollView>
  )
}




