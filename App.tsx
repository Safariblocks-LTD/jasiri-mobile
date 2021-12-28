import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import {store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { HomeStack
 } from './App/screens/Index';

// import ReactDOM from 'react-dom'

const Navigator =()=> {
  return (  
    <NavigationContainer>
   <HomeStack/>   
   </NavigationContainer>
   
  )
}

export default function App() {
  return (
   
    
    <Navigator/>
 
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


