// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation } from '../navigation/Index';

import { CreateAccount, Dashboard, Registration } from './index';
import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator()

 type navigation = {
   navigation: any
 }

export const HomePlaceHolder = ({ navigation }: navigation) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View 
      style={styles.container}
      >
        <View style={styles.ecslipe3}></View>
        <View style={styles.eclipse2}></View>

        <View style={styles.logo} >
          <Text style= {styles.logoText}>
            JA$IRI
          </Text>
        </View>
      
        <View style={styles.textBox}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.account}>add Account</Text>
          </TouchableOpacity>
        </View>
         
       
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1, 
    padding: 16, 
    width: '100%', 
    height: '100%',
    backgroundColor: '#E3E8E7'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    padding: 10,
    width: 325,
    left: 15,
    bottom: -470,
    height: 42,
    borderRadius: 15,
  },
  logo: {
   bottom: 320,
   left: 90,
   right: 97,
   width: 177,
   height: 38,
   top: 420,
   display: 'flex',
   alignItems: 'center',
  },

 logoText: {
  // fontFamily: 'Orbitron',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 42,
  lineHeight: 45,
  color: '#78B9B1'
 },

 textBox: {
  top: 55
  },
  
  account: {
    backgroundColor: '#3BD5C2',
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    fontStyle: 'normal',

  },
  ecslipe3: {
    width: 186,
    height: 163,
    overflow: 'hidden', 
    backgroundColor: '#403131', 
    top: -56, 
    left: -24, 
    position: 'absolute', 
    opacity: .04, 
    borderRadius: 130
  },
  eclipse2: {
    width: 186,
    height: 163,
    overflow: 'hidden', 
    backgroundColor: '#8E5858', 
    top: 0, 
    left: -59, 
    position: 'absolute', 
    opacity: .02, 
    borderRadius: 130
  },
});

export const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Home" component={HomePlaceHolder} />   
          <Stack.Screen name="Registration" component={Registration} />   
          <Stack.Screen name="Create Account" component={CreateAccount} />    
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Group> 
      </Stack.Navigator>
    )
  }
