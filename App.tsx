require('node-libs-expo/globals');

// import * as Random from 'expo-random';

import 'react-native-get-random-values'

import 'fastestsmallesttextencoderdecoder'
 

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import {store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { DashBoardNavigation, AuthenticationNavigation
 } from './App/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import * as crypto from 'expo-crypto';

// export {crypto}

import * as Updates from 'expo-updates';



const loggedIn = false


export default function App() {
  React.useEffect(()=>{
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
  return (
   
    <Provider store={store}>
      <SafeAreaProvider>
      <NavigationContainer>
       {loggedIn? <DashBoardNavigation/>:<AuthenticationNavigation/>  } 
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
    
 
  );
}


