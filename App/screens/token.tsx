// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  BackHandler,
  RefreshControl
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import { RootState} from '../redux';
import routes  from '../navigation/routes';
import { transactionHistory } from '../services';
import Loader from '../components/loading';


export const Token = () => {
 
  const navigation = useNavigation()

  // console.log(navigation.)
  
  const dispatch = useDispatch()
  const accountInfo = useSelector((state: RootState)=>state.accountInfo.info)
  const address = useSelector((state: RootState)=>state.newAccount.address)

  const [history, setHistory] = React.useState<object[]>()

  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
    

    const onRefresh=()=>{
        setRefreshing(true)
        setLoading(true)
    }

  

  React.useEffect(()=>{
   
      (async ()=>{
      const history =  await transactionHistory({address: address, name: 'transactionHistory'})
      // console.log(history)
      setHistory(JSON.parse(history).transactions)
      setRefreshing(false)
      setLoading(false)
      })()
    
   
  },[address, accountInfo, refreshing])

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
    
       
         navigation.navigate(routes.TRANSACT)
         return true
       };
    
     
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  
  return (
    
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <View style={styles.container}>
              <Loader loading={loading}/>
          <View style={styles.token} >
            <Text style={styles.tokenText}> Total JASIRI balance</Text>
            <Text style={styles.tokenText}> {accountInfo.assets.length && accountInfo.assets[0].amount} JASIRI</Text>
            <Text style={styles.tokenText}> $ #### USD</Text>
          </View>
         
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate(routes.SEND_TOKEN)}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate(routes.RECIEVE_TOKEN)}
            >
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.transactions}>
          <Text style={styles.transactionHeader}>TRANSACTION HISTORY</Text>
          {history && history.map((item, index)=>{
          let i = item['asset-transfer-transaction']
          return (<View key={Math.random()}>
          <Text style={styles.historyText}>{index + 1}{':'} {`${item.id.slice(0, 15)} ...`} </Text>
          <Text style={styles.historySubText}>Amount: {i && i.amount} </Text>
          <Text style={styles.historySubText}>Receiver: {i && i.receiver.slice(0, 15)}{'...'} </Text>
          <Text style={styles.historySubText}>Asset: {i && i['asset-id']} </Text>
          </View>)
          }) || <Loader loading={true}/>}

          </View>
          

          
          
          
        </View> 
      </ScrollView>
     
     
    
  );
};
const styles = StyleSheet.create({
  transactionHeader: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    margin: 5
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
  historyText: {
    margin: 2,
  },
  historySubText: {
    fontSize: 11,
    fontWeight: 'bold'
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

