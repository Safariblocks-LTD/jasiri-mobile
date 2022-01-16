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
import { RootState, setVisible as setGlobalVisible} from '../../../../redux';


export const Token = (props: { route, navigation}) => {
  const [sendButton, setSendButton] = React.useState(false)
  
  
  const dispatch = useDispatch()
  const token = useSelector((state: RootState)=>state.token.token)

  console.log(token)



  


  
  return (
    <Modal>
      <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
         
          <View
           
           
           style={styles.token}
          >
            <Text style={styles.tokenText}> Total jasiri balance</Text>
            <Text style={styles.tokenText}> {token.amount} {token.unitName}</Text>
            <Text style={styles.tokenText}> $ {token.amount} USD</Text>
            </View>
         
          {!sendButton?<><View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>setSendButton(true)}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>props.navigation.navigate('main')}
            >
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.transactioHeader}>TRANSACTION HISTORY</Text>
          </>
          
          
          : 
          
          <>
         <View style={styles.transactionContainer}>
         <Text style={styles.addressTitle}>Recipient Address</Text>
           <View style={styles.recipientqrContainer}>
           <TextInput style={styles.addressInput}></TextInput>
           <View style={styles.qrInput}>
             <Image source={require('../../../../assets/qr.png')}></Image>
           </View>

           </View>
        
        
          <View>
        <Text style={styles.addressTitle}>Enter Amount</Text>
        <TextInput style={styles.amountInput}></TextInput>
        </View>

          <View>
        <TouchableOpacity style={styles.continueButton}>
         <Text> Continue</Text>
       </TouchableOpacity>
       </View>
       
        </View>
         
       </>

        
}
        </View>
        

        

        
      </View>
      </ScrollView>

     
    </Modal>
  );
};
const styles = StyleSheet.create({
  transactioHeader: {
    alignSelf: 'flex-start',
    margin: 20,
    fontWeight: 'bold',
    // borderWidth: 3
  },
  container: {
    alignItems:'center',
    backgroundColor: '#E3E8E7',
    width: '100%',
    height: 800,
    justifyContent: 'flex-start',
    // borderWidth: 5
  },
  transactionContainer: {
    width: '100%',
    borderWidth: 3,
    alignSelf: 'flex-start',
    padding: 20
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
    width: 150,
    height: 50,
    margin: 16,
    borderRadius: 10
  },
  continueButton: {
    alignItems: 'center',
    backgroundColor: '#79E7E7',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    width: '80%',
    height: 50,
    margin: 20,
    borderRadius: 10,
    marginTop: 200,
  
  },
  buttonContainer: {
    flexDirection: 'row'

  },
  token: {
    width: 350,
    height: 150,
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    
  },
  tokenText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 3
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
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

