// import ReactDOM from 'react-dom'
import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'

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
import { Error } from '../screens/error';


const Stack = createStackNavigator()

const Tab = createBottomTabNavigator();

export const DashBoardNavigation=()=> {
  return (

      <Tab.Navigator
          initialRouteName="Main"
          tabBar={({state, descriptors, navigation})=><TabBar state={state} descriptors={descriptors} navigation={navigation}/>}
          screenOptions={{
            tabBarStyle: styles.tabBar,
            header: ()=><View></View>
            
          }}
        >
          <Tab.Group>
            <Tab.Screen name="Main" component={Dashboard}/>            
            <Tab.Screen name="Contacts" component={View}/>
            <Tab.Screen name="Notification" component={View} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Transact" component={Transact} />
            <Tab.Screen name="Send" component={Transact} />
            <Tab.Screen name="Token" component={Token} />
            <Tab.Screen name="Scan QR" component={QrScanner} /> 
            <Tab.Screen name="Receive" component={Receive} /> 
            <Tab.Screen name="Send token" component={SendToken} /> 
          </Tab.Group>
      </Tab.Navigator>
  )
}




export const AuthenticationNavigation=()=>{
  return (

    <Stack.Navigator
    initialRouteName="Home"
     screenOptions={{
         header: ()=><View></View>
     }}
     >
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />   
          <Stack.Screen name="Registration" component={Registration} />   
          <Stack.Screen name="Create Account" component={CreateAccount} />    
          <Stack.Screen name="Recover Account" component={RecoverAccount} />   
          <Stack.Screen name="Seed Phrase" component={SeedPhrase} /> 
          <Stack.Screen name="Seed Phrase Final Page" component={SeedPhraseFinalPage} /> 
          <Stack.Screen name="Dash board" component={DashBoardNavigation} /> 
          <Stack.Screen name="Error" component={Error} /> 
        </Stack.Group>
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



