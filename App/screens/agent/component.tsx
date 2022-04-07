
import * as React from 'react';
import {
 
  ScrollView,
  TouchableOpacity} from "react-native";
import { Center, VStack, Box, Stack, Input, FormControl } from "native-base";
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



export const Agent = () => {
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
        <MyAppText style={styles.title}>Agent Signup form</MyAppText>
        <VStack space={4}>
          <Center style={styles.down}>
            <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg" _text={{
              fontSize: "md",
              fontWeight: "medium",
              color: "warmGray.50",
              textAlign: "center"
            }}>
              <MyAppText>Thank you for expressing interest in becoming an Agent for the JASIRI protocol. Please fill the form below to proceed.  </MyAppText> 
            </Box>
          </Center>
          <VStack>
            <Box bg={"#D1FDE2"} p="4" rounded="lg">
              <Center>
                <Stack space={4} w="100%">
                  <FormControl  w="100%">
                    <FormControl.Label>Password:</FormControl.Label>
                    <Input variant="outline" bg="#fff" placeholder="Text" />
                    <FormControl.Label>Business Name:</FormControl.Label>
                    <Input variant="filled" bg="#fff" placeholder="Text" />
                    <FormControl.Label>Average Cash flow Volume:</FormControl.Label>
                    <Input variant="filled" bg="#fff" placeholder="Choose" />
                    <FormControl.Label>Country of Operation:</FormControl.Label>
                    <Input variant="filled" bg="#fff" placeholder="Text" />
                    <FormControl.Label>Phone Number:</FormControl.Label>
                    <Input variant="filled" bg="#fff" placeholder="Text" />
                  </FormControl> 
                  <NormalButton title='Submit' style={styles.button} clickHandler={navigation.navigate("AgentSignUp")} />
                </Stack>
              </Center>
            </Box>
          </VStack>
        </VStack>
      </Center>

      </ScrollView>
  )
}




