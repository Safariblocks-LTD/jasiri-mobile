import 'fastestsmallesttextencoderdecoder'
// import * as Crypto from 'expo-crypto';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux'
import {RootState, store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { AuthenticationNavigation
 } from './App/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAddress, setIsLoggedIn, setMnemonic } from './App/redux';

// import WalletConnectProvider from '@walletconnect/react-native-dapp';
// import { withWalletConnect } from '@walletconnect/react-native-dapp';
// import { Linking } from 'react-native';

const uri = 'wc:0ac0146f-13a3-4739-9e85-7eeebf2ac70d@1?bridge=https%3A%2F%2F3.bridge.walletconnect.org&key=5090de44777a909754f2c8ed878a6868cea54e98bfd7d1288351f7628c1575d5'


const Navigation=()=>{
  
  const dispatch = useDispatch()
  React.useEffect(()=>{
    (async () => {  
      try {    
          const jsonValue = await AsyncStorage.getItem('accountData')  
          if(jsonValue!=null && JSON.parse(jsonValue).address && JSON.parse(jsonValue).mnemonic){
            dispatch(setIsLoggedIn(true))
            dispatch(setAddress(JSON.parse(jsonValue).address))
            dispatch(setMnemonic(JSON.parse(jsonValue).mnemonic))
          }  
         
      } 
      catch(e) {    
          //
          console.log(' error reading value  ')
      }})();

    (async()=>{
      try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...
        await Updates.reloadAsync();
      }
    } catch (e) {
      // handle or log error
    }})()
    
  },[])

  return(
    <NavigationContainer>
    <AuthenticationNavigation/> 
    
  </NavigationContainer>
  )
}



export default function App() {



  return (
     <NativeBaseProvider>
    <Provider store={store}>
       <SafeAreaProvider>
       
       <Navigation/>
         
      
         
      </SafeAreaProvider>
    
    </Provider>
    </NativeBaseProvider>
 
  );
}

// export default withWalletConnect(App, {
//   redirectUrl: 'myapp://',
//   bridge :"https://bridge.walletconnect.org",
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
// })


