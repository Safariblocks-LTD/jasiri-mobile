// import ReactDOM from 'react-dom'
import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { MaterialIcons  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { SettingsScreen, Transact } from '../screens';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TabBar } from './tab-bar';


import { createStackNavigator } from "@react-navigation/stack"
import { Token, Receive, SendToken } from '../components';
import { QrScanner } from "../components/qrScanner"
import { Home, Registration, CreateAccount } from "../screens"
import { Dashboard } from '../screens';
import RecoverAccount from "../screens/recoverAccount/component"
import SeedPhrase from "../screens/seedphrase/component"
import { SeedPhraseFinalPage } from '../screens';


const loggedIn = true

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator();

export const Navigation =()=> {
  return (

      <Tab.Navigator
          initialRouteName="Home"
          tabBar={({state, descriptors, navigation})=><TabBar state={state} descriptors={descriptors} navigation={navigation}/>}
          screenOptions={{
            tabBarStyle: styles.tabBar,
            header: ()=><View></View>
            
          }}
        >
          <Tab.Group>
            <Tab.Screen name="Main" component={loggedIn?Dashboard:AuthenticationStack}/> 
            <Tab.Screen name="Send" component={SendStack} />            
            <Tab.Screen name="Contacts" component={View}/>
            <Tab.Screen name="Notification" component={View} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Group>
      </Tab.Navigator>

      

   
  )
}

export const SendStack=()=> {
  return (
     <Stack.Navigator
     initialRouteName="Transact"
      screenOptions={{
          header: ()=><View></View>
      }}
      >
        <Stack.Group >
          <Stack.Screen name="Transact" component={Transact} />
          <Stack.Screen name="Token" component={Token} />
          <Stack.Screen name="Scan QR" component={QrScanner} /> 
          <Stack.Screen name="Receive" component={Receive} /> 
          <Stack.Screen name="Send token" component={SendToken} /> 
        </Stack.Group>
      </Stack.Navigator> 
  )
}


export const AuthenticationStack=()=>{
  return (

    <Stack.Navigator
    initialRouteName="Home"
     screenOptions={{
         header: ()=><View></View>
     }}
     >
        <Stack.Group >
          <Stack.Screen name="Home" component={Home} />   
          <Stack.Screen name="Registration" component={Registration} />   
          <Stack.Screen name="Create Account" component={CreateAccount} />    
          <Stack.Screen name="Recover Account" component={RecoverAccount} />   
          <Stack.Screen name="Seed Phrase" component={SeedPhrase} /> 
          <Stack.Screen name="Seed Phrase Final Page" component={SeedPhraseFinalPage} /> 
        </Stack.Group >

      </Stack.Navigator> 

  )
}

const styles= StyleSheet.create({
  tabBar: {
    // height: 90,
    // position: 'relative',
    // backgroundColor: '#fff',

  },
  
})



