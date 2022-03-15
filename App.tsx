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


