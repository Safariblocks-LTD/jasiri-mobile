import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { HomeStack, SettingsStack } from './App/navigation/bottomNavigation/bottomNavigation';
import {store}  from './App/redux/store'
import { createBottomTabNavigator as cBn } from '@react-navigation/bottom-tabs'
import { MaterialIcons  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


// import ReactDOM from 'react-dom'
const Tab = cBn();

const Navigator =()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#028373',
        }}
        >
        <Tab.Screen
          name="wallet"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wallet" size={40} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="contacts"
          component={SettingsStack}
          options={{
            tabBarLabel: 'contacts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="contacts" size={40} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="other"
          component={SettingsStack}
          options={{
            tabBarLabel: 'swap',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="swap-vert-circle" size={50} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="one more"
          component={SettingsStack}
          options={{
            tabBarLabel: 'bell',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={40} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="another"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="player-settings" size={40} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}> 
        <Navigator/>
      <StatusBar style="auto" />
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


