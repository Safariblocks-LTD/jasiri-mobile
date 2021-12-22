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
import HomeScreen from '../../screens/home/component';
import JasiriTransaction from '../../screens/sendReceiveJasiri/component';

const Tab = createBottomTabNavigator();

const Navigator =()=> {
  const navigation = useNavigation();  
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        
        
        screenOptions={{
          tabBarActiveTintColor: '#028373',
          tabBarStyle: {
            position: 'relative',
            backgroundColor: '#fff',
            height: 100

          },
          
          headerLeft: () => <Ionicons name="chevron-back" size={20} color="black" onPress={()=>navigation.goBack()} />,

        }}
        >
        <Tab.Screen
          name="Wallet"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wallet" size={30} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="contacts" size={30} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Connect"
          component={JasiriTransaction}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="swap-vert-circle" size={60} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={30} color="#028373" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="player-settings" size={30} color="#028373" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default Navigator