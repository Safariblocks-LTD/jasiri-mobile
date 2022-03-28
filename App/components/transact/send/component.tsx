// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  BackHandler,
  RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import routes from '../../../navigation/routes';
import { RootState, setAccountInfo, setData, setErrorMessage, setroutes, setSuccessMessage, setToken } from '../../../redux';

import { sendJSR } from '../../../services';
import { MyAppText } from '../../common/appTexts';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Loading from '../../loading';
import Loader from '../../loading';






export const SendToken = () => {

  const navigation=useNavigation()

  const [amount, setAmount] = React.useState('')
  const [success, setSuccess] = React.useState<Boolean>()
  const [loading, setLoading] = React.useState<boolean>()

  
  
  const dispatch = useDispatch()

  const accountInfo = useSelector((state: RootState)=>state.accountInfo.info)
  const scanned = useSelector((state: RootState)=>state.scanned.data)
  const address = useSelector((state: RootState)=>state.newAccount.address)
  const mnemonic = useSelector((state: RootState)=>state.newAccount.mnemonic)
  const asset = useSelector((state: RootState)=>state.activeAsset.asset)


  const [refreshing, setRefreshing] = React.useState<boolean>(false)
    

  const onRefresh=()=>{
      setRefreshing(true)
  }


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
      const res = await sendJSR({
        name: 'sendJSR', 
      description: '', 
      amount: parseInt(amount), 
      assetId: asset.index, 
      receiver: scanned, 
      sender: address, 
      sk: mnemonic
      })


      if(res.errored){
        console.log(res)
        dispatch(setErrorMessage(res.data))
        dispatch(setroutes(routes.SEND_RECIEVE_SCREEN))
        navigation.navigate(routes.ERROR)
        setLoading(false);
        return 
       
        
    }
      
      
      const response = res
     
      dispatch(setAccountInfo(response))
      setLoading(false)
      dispatch(setroutes(routes.SEND_RECIEVE_SCREEN))
      dispatch(setSuccessMessage('sent'))
      navigation.navigate(routes.SUCCESS)

      // setAccountInfo(account)
      
      
      
      
      })()
     
    }catch(e){
      // console.log(JSON.stringify(e))
      
      
    }
   
    
  }

  
  const scanQR=()=>{
    dispatch(setroutes(routes.SEND_TOKEN))
    console.log(routes.SEND_TOKEN)

    navigation.navigate(routes.SCAN_QR)
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
    
        
         navigation.navigate(routes.TOKEN)
         return true
       };
    
     
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );



  return (
    
      <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <View style={styles.container}>
      <Loader loading={loading}/>

              
          <View style={styles.token} >
            <MyAppText style={styles.tokenText}> Total {asset.params.name} balance</MyAppText>
            <MyAppText style={styles.tokenText}> {asset.amount/10000} {asset.params.name}</MyAppText>
            <MyAppText style={styles.tokenText}> $ #### USD</MyAppText>
          </View>
         
          
          
          
         <View style={styles.transactionContainer}>
         <MyAppText style={styles.addressTitle}>Recipient Address</MyAppText>
           <View style={styles.recipientqrContainer}>
           <TextInput 
           style={styles.addressInput} 
           value={scanned}
           placeholder='e.g JKJKHDJHDJHDJ.......'
           onChangeText={handleChangeAddress}
           />

           <TouchableOpacity 
            style={styles.qrInput}
            onPress={scanQR}
           >
             <Image source={require('../../../assets/qr.png')}></Image>
           </TouchableOpacity>

           </View>
        
        
          <View>
        <MyAppText style={styles.addressTitle}>Enter Amount</MyAppText>
        <TextInput 
          style={styles.amountInput} 
          value={amount} 
          keyboardType='numeric' 
          onChangeText={text=>handleChangeAmount(text)}
          placeholder='e.g 100'
        />
        
        </View>
       

          <View>
        <TouchableOpacity style={styles.continueButton} onPress={()=>handleSend()}>
         <MyAppText style={styles.buttonText}> Continue</MyAppText>
       </TouchableOpacity>
      {/* <ImagePickerExample/> */}
       {/* {success == true?<MyAppText>Successfully sent</MyAppText>: success == false ?<MyAppText>Failed to send sent</MyAppText> : <MyAppText></MyAppText>} */}
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


