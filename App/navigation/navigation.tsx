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
import { Token } from "../components/dashboard"
import Receive from "../components/dashboard/receive/component"
import { QrScanner } from "../components/qrScanner"
import { Home, Registration, CreateAccount } from "../screens"
import { Dashboard } from '../screens';
import RecoverAccount from "../screens/recoverAccount/component"
import SeedPhrase from "../screens/seedphrase/component"
import { SeedPhraseFinalPage } from '../screens';


const Stack = createStackNavigator()

const Tab = createBottomTabNavigator();

export const Navigation =()=> {
  return (
    <>
      <Tab.Navigator
          initialRouteName="Home"
          tabBar={({state, descriptors, navigation})=><TabBar state={state} descriptors={descriptors} navigation={navigation}/>}
          screenOptions={{
            tabBarStyle: styles.tabBar,
            header: ()=><View></View>
            
          }}
        >
          <Tab.Group>
            <Tab.Screen name="Main" children={Dashboard}/> 
            <Tab.Screen name="Send" children={Transact} />            
            <Tab.Screen name="Screen1" children={()=><View></View>}/>
            <Tab.Screen name="Notification" children={()=><View></View>} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Group>
          <Tab.Group>
            <Tab.Screen name="Home" component={Home} />   
            <Tab.Screen name="Registration" component={Registration} />   
            <Tab.Screen name="Create Account" component={CreateAccount} />    
            <Tab.Screen name="Recover Account" component={RecoverAccount} />   
            <Tab.Screen name="Seed Phrase" component={SeedPhrase} /> 
            <Tab.Screen name="Seed Phrase Final Page" component={SeedPhraseFinalPage} />
            <Tab.Screen name="Token" component={Token} />
            <Tab.Screen name="Scan QR" component={QrScanner} /> 
            <Tab.Screen name="Receive" component={Receive} /> 
          </Tab.Group>
      </Tab.Navigator>

      {/* <Stack.Navigator
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
          <Stack.Screen name="Token" component={Token} />
          <Stack.Screen name="Scan QR" component={QrScanner} /> 
          <Stack.Screen name="Receive" component={Receive} /> 
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />         
        </Stack.Group> 
      </Stack.Navigator> */}
    </>
   
  )
}

const styles= StyleSheet.create({
  tabBar: {
    // height: 90,
    // position: 'relative',
    // backgroundColor: '#fff',

  },
  
})

