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

// import { CreateAccount, Registration } from './Index';
 const Stack = createNativeStackNavigator()

 type navigation = {
   navigation: any
 }

export const HomePlaceHolder = ({ navigation }: navigation) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View 
      style={{ flex: 1, padding: 16, width: '100%', height: '100%', backgroundColor: 'red'}}
      >
        <View style={styles.ecslipe3}></View>
        <View style={styles.eclipse2}></View>

        <View style={styles.logo} >
          <Text style= {styles.logoText}>
            JA$IRIfgrewwrwetryruty
          </Text>
        </View>
        <View>
          <Text>sammyy kirighakyuuuuuuuuuuuuuuuuuuuyryrte4tt54</Text>
        </View>
      
        <View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={styles.account}>sammyy</Text>
          </TouchableOpacity>
        </View> 
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
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
   left: 105,
   right: 93,
   width: 177,
   height: 38,
   top: 439,
   display: 'flex',
   alignItems: 'center'
  },
 logoText: {
  // fontFamily: 'Orbitron',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 42,
  lineHeight: 45,
  color: '#78B9B1'
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
    opacity: .06, 
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
    opacity: .04, 
    borderRadius: 130
  },

});

export const HomeStack = () => {
    return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomePlaceHolder} />   
         {/* <Stack.Screen name="Registration" component={Registration} />   
        <Stack.Screen name="CreateAccount" component={CreateAccount} />       */}
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    )
  }
