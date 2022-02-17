// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Modal,
  Image,
  Alert,
  Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, setData } from '../../../redux';
import { setErrorMessage } from '../../../screens/error/reducer';
import { sendAsset } from '../../../services';
import { Loading } from '../../loading';





export const SendToken = ({navigation}) => {

  const [amount, setAmount] = React.useState('')
  const [success, setSuccess] = React.useState<Boolean>()
  const [loading, setLoading] = React.useState<boolean>()

  
  
  const dispatch = useDispatch()

 
  const token = useSelector((state: RootState)=>state.token.token)
  const scanned = useSelector((state: RootState)=>state.scanned.data)
  const address = useSelector((state: RootState)=>state.newAccount.address)
  const mnemonic = useSelector((state: RootState)=>state.newAccount.mnemonic)

  // console.log(mnemonic)


  const handleChangeAmount=(text:string)=>{
    console.log(text)
    setAmount(text)
  }

  const handleChangeAddress=(text:string)=>{
    console.log(text)
    dispatch(setData(text))
  }

  const handleSend=()=>{
    console.log('sending')
    setLoading(true)
    try{
      
      (async()=>{
      const res = await sendAsset('description', parseInt(amount), token['asset-id'], scanned, address, mnemonic)
      // console.log(res)
      if(res === 0){
        setLoading(false)
        navigation.navigate('Success')
      }else{
      
        setLoading(false)
        navigation.navigate('Error')
        dispatch(setErrorMessage(`${res.message}`))
      }
      
      
      })()
     
    }catch(e){
      // console.log(JSON.stringify(e))
      
      
    }
   
    
  }



  return (
    
      <ScrollView>
      <View style={styles.container}>


              
          <View style={styles.token} >
            <Text style={styles.tokenText}> Total jasiri balance</Text>
            <Text style={styles.tokenText}> {token.amount} {token.unitName}</Text>
            <Text style={styles.tokenText}> $ {token.amount} USD</Text>
          </View>
         
          
          
          
         <View style={styles.transactionContainer}>
         <Text style={styles.addressTitle}>Recipient Address</Text>
           <View style={styles.recipientqrContainer}>
           <TextInput 
           style={styles.addressInput} 
           value={scanned}
           placeholder='e.g JKJKHDJHDJHDJ.......'
           onChangeText={handleChangeAddress}
           />

           <TouchableOpacity 
            style={styles.qrInput}
            onPress={()=>navigation.navigate('Scan QR')}
           >
             <Image source={require('../../../assets/qr.png')}></Image>
           </TouchableOpacity>

           </View>
        
        
          <View>
        <Text style={styles.addressTitle}>Enter Amount</Text>
        <TextInput 
          style={styles.amountInput} 
          value={amount} 
          keyboardType='numeric' 
          onChangeText={text=>handleChangeAmount(text)}
          placeholder='e.g 100'
        />
         {loading && <Loading/>}
        </View>
       

          <View>
        <TouchableOpacity style={styles.continueButton} onPress={()=>handleSend()}>
         <Text style={styles.buttonText}> Continue</Text>
       </TouchableOpacity>
      {/* <ImagePickerExample/> */}
       {/* {success == true?<Text>Successfully sent</Text>: success == false ?<Text>Failed to send sent</Text> : <Text></Text>} */}
       </View>
       
        </View>
        </View>
      </ScrollView>
     
     
    
  );
};
const styles = StyleSheet.create({
  transactionHeader: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    // borderWidth: 3
  },
  container: {
    alignItems:'center',
    backgroundColor: '#E3E8E7',
    width: '100%',
    // height: 850,
    justifyContent: 'flex-start',
   
    // marginTop: 0
  },
  transactionContainer: {
    width: '85%',
    // borderWidth: 3,
    margin: 40
    // alignSelf: 'flex-start',
    // padding: 20
  },
  addressTitle: {
    fontWeight: 'bold',
    margin: 3
  },
  addressInput: {
    margin: 10,
    height: 50,
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#79E7E7',
    justifyContent: 'center',
    padding: 10,
    width: '40%',
    height: 50,
    // margin: 16,
    borderRadius: 10
  },
  continueButton: {
    alignItems: 'center',
    backgroundColor: '#79E7E7',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    width: '85%',
    height: 50,
    margin: 20,
    borderRadius: 10,
    marginTop: 200,
  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 5,
    width: '85%',
    margin: 30

  },
  token: {
   width: '85%',
    height: '15%',
    marginTop: 50,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    // borderWidth: 5
    
  },
  tokenText: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 3
  },
  transactions: {
    // borderWidth: 5,
    width: '85%'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20
    // textTransform: 'uppercase'
  },
  amountInput: {
    width: '95%',
    margin: 10,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 4
    // borderWidth: 1
  },
  recipientqrContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  qrInput: {
    width: '15%',
    margin: 10,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
});


