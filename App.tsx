import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import {store}  from './App/redux/store'
// import HomeStack from './App/screens/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator as cBn } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './App/screens/home/component';
import Registration from './App/screens/registration/component';
import CreateAccount from './App/screens/createAccount/component';
import SettingsScreen from './App/screens/settings/component';
import JasiriTransaction from './App/screens/sendReceiveJasiri/component';
// import ReactDOM from 'react-dom'
const Tab = cBn();
const Stack = createNativeStackNavigator()

// const Navigator =()=> {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         {/* <Stack.Screen
//           name="HomeStack"
//           component={HomeStack}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="home" color={color} size={size} />
//             ),
//           }}
//         /> */}
//         {/* <Tab.Screen
//           name="SettingsStack"
//           component={SettingsStack}
//           options={{
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="settings"
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         /> */}
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Transactions" component={JasiriTransaction} />
    </Stack.Navigator>
  </NavigationContainer>
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


