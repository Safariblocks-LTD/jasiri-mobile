// import ReactDOM from 'react-dom'
import * as React from 'react';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Token, SettingsScreen, Qr, Tokens, Wallet, Transact } from '../../screens';
import { DashboardHome } from '../../components/dashboard/Index';
import { StyleSheet } from 'react-native';
import Send from '../../screens/send/component';

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation =()=> {
  return (
    
      <Tab.Navigator
          initialRouteName="main"
          barStyle= {styles.bar}
        >
          <Tab.Group>
        <Tab.Screen
          name="main"
          component={DashboardHome}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="wallet" size={30} color="#028373" style={styles.debug}/>
            ),
          }}
        /> 
        <Tab.Screen
          name="Tokens"
          component={Tokens}
          options={{
           
            tabBarIcon: () => (
              <MaterialCommunityIcons name="contacts" size={30} color="#028373" style={styles.debug} />
            ),
          }}
        />
        <Tab.Screen
          name="Send"
          component={Transact}
          options={{
           
            tabBarIcon: () => (
              <MaterialIcons name="swap-vert-circle" size={45} color="#028373" style={styles.debug}/>
            ),
          }}
        />
        <Tab.Screen
          name="Token"
          component={Token}
          options={{
            tabBarIcon: () => (
              <Octicons name="bell" size={30} color="#028373" style={styles.debug}/>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
           
            tabBarIcon: () => (
              <Fontisto name="player-settings" size={30} color="#028373" style={styles.debug}/>
            ),
          }}
        />
        

        </Tab.Group>
        

       
      </Tab.Navigator>
   
  )
}

const styles= StyleSheet.create({
  bar: {
    // flex: 1,
    position: 'relative',
    backgroundColor: '#fff',

  },
  debug: {

    // borderWidth: 1,
    height: 45,
    width: 45
  }
})

