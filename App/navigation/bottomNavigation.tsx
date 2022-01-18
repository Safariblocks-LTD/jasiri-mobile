// import ReactDOM from 'react-dom'
import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { MaterialIcons  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { SettingsScreen, Transact } from '../screens';
import { DashboardHome } from '../components/dashboard';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TabBar } from './tab-bar';

const Tab = createBottomTabNavigator();

export const BottomNavigation =()=> {
  return (
    
      <Tab.Navigator
          initialRouteName="main"
          tabBar={()=><TabBar/>}
          screenOptions={{
            tabBarStyle: styles.tabBar,
            header: ()=><View></View>
            
          }}
        >
          <Tab.Group>
            <Tab.Screen name="main" component={DashboardHome}/> 
            <Tab.Screen name="screen1" component={()=><View></View>}/>
            <Tab.Screen name="Send" component={Transact} />
            <Tab.Screen name="notification" component={()=><View></View>} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Group>
      </Tab.Navigator>
   
  )
}

const styles= StyleSheet.create({
  tabBar: {
    // height: 90,
    // position: 'relative',
    // backgroundColor: '#fff',

  },
  
})

