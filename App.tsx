import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import {store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { Navigation
 } from './App/navigation';


export default function App() {
  return (
   
    <Provider store={store}>
      <NavigationContainer>
        <Navigation/>   
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


