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
import { BottomNavigation } from '../navigation';

import { 
CreateAccount, Registration
  
  
 } from '.';
 const Stack = createNativeStackNavigator()

export const HomePlaceHolder = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            You are on Home Screen please navigate......
          </Text>

         


          {/* Registration */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Registration')
            }>
            <Text>Registration</Text>
          </TouchableOpacity>

            {/* create account */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text>create account</Text>
          </TouchableOpacity>

            {/* Jasiri */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text>Dashboard</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export const HomeStack =()=>{
    return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomePlaceHolder} />   
         <Stack.Screen name="Registration" component={Registration} />   
        <Stack.Screen name="CreateAccount" component={CreateAccount} />      
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    )
  }

