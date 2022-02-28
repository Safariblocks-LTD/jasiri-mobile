require('node-libs-expo/globals');

// import * as Random from 'expo-random';

import 'react-native-get-random-values'

import 'fastestsmallesttextencoderdecoder'
 

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux'
import {RootState, store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { DashBoardNavigation, AuthenticationNavigation
 } from './App/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAddress, setIsLoggedIn, setMnemonic } from './App/redux';


const Navigation=()=>{
  const isLoggedIn = useSelector((state: RootState)=>state.account.isLoggedIn)
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
        <Navigation/>
    </SafeAreaProvider>
    </Provider>
    
 
  );
}


