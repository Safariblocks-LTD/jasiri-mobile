// import ReactDOM from 'react-dom'
import React from 'react';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Token, SettingsScreen, Qr, Send,  Tokens, Wallet, Dashboard } from '../../screens/Index';

const Tab = createBottomTabNavigator();

export const BottomNavigation =()=> {
  const navigation = useNavigation();  
  return (
    
      <Tab.Navigator
        // initialRouteName="Dashboard"
        
        
        screenOptions={{
          // tabBarActiveTintColor: '#028373',
          tabBarStyle: {
            // position: 'relative',
            // backgroundColor: '#fff',
            height: 100

          },
          
          // headerLeft: () => <Ionicons name="chevron-back" size={20} color="black" onPress={()=>navigation.goBack()} />,

        }}
        >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wallet" size={30} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Tokens"
          component={Tokens}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="contacts" size={30} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Send"
          component={Send}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="swap-vert-circle" size={60} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Token"
          component={Token}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={30} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="player-settings" size={30} color="#028373" />
            ),
          }}
        />

       
      </Tab.Navigator>
   
  )
}

