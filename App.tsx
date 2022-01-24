require('node-libs-expo/globals');

import * as Random from 'expo-random';

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
import { Navigation, AuthenticationStack
 } from './App/navigation';

// import * as crypto from 'expo-crypto';

// export {crypto}


const loggedIn = true


export default function App() {
  return (
   
    <Provider store={store}>
      <NavigationContainer>
       {loggedIn? <Navigation/>:<AuthenticationStack/>  } 
    </NavigationContainer>
    </Provider>
    
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


