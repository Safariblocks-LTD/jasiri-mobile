require('node-libs-expo/globals');

// import * as Random from 'expo-random';

require('react-native-get-random-values')
// require("react-native-crypto")

import 'fastestsmallesttextencoderdecoder'
// import * as Crypto from 'expo-crypto';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux'
import {store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { AuthenticationNavigation
 } from './App/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAddress, setIsLoggedIn, setMnemonic } from './App/redux';
import './shim.js'
import WalletConnectProvider from '@walletconnect/react-native-dapp';

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
   
    <Provider store={store}>
       <SafeAreaProvider>
       <WalletConnectProvider
        bridge="https://bridge.walletconnect.org"
        clientMeta={{
          description: 'Connect with WalletConnect',
          url: 'https://walletconnect.org',
          icons: ['https://walletconnect.org/walletconnect-logo.png'],
          name: 'WalletConnect',
        }}
        redirectUrl={'yourappscheme://'}
        storageOptions= {{
          asyncStorage: AsyncStorage,
        }}
        >
       
          <Navigation/>
          </WalletConnectProvider>
      </SafeAreaProvider>
    
    </Provider>
    
 
  );
}


