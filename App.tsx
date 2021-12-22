import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { HomeStack, SettingsStack } from './App/navigation/bottomNavigation/bottomNavigation';
import {store}  from './App/redux/store'
import Navigator from './App/navigation/bottomNavigation/bottomNavigation';




export default function App() {
  return (
    <Provider store={store}> 
    <NavigationContainer >
        <Navigator />
      <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


