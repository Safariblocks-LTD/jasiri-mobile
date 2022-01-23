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
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { sendAsset } from '../../../services';


export const SendToken = () => {

  
  
  const dispatch = useDispatch()
  const token = useSelector((state: RootState)=>state.token.token)
  const address =  useSelector((state: RootState)=>state.scanned.data)

  // console.log(token)


  const handleSend=()=>{
   
    (async()=>await sendAsset('description', 1000))()
    console.log('sending')
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
           <TextInput style={styles.addressInput} value={address}></TextInput>
           <TouchableOpacity 
            style={styles.qrInput}
            onPress={()=>props.navigation.navigate('Scan QR')}
           >
             <Image source={require('../../../assets/qr.png')}></Image>
           </TouchableOpacity>

           </View>
        
        
          <View>
        <Text style={styles.addressTitle}>Enter Amount</Text>
        <TextInput style={styles.amountInput}></TextInput>
        </View>

          <View>
        <TouchableOpacity style={styles.continueButton} onPress={()=>handleSend()}>
         <Text style={styles.buttonText}> Continue</Text>
       </TouchableOpacity>
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
    height: 850,
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
    borderRadius: 10
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
    justifyContent: 'center'
  },
});

