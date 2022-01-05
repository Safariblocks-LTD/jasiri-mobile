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
import { 
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
  Orbitron_900Black 
} from '@expo-google-fonts/orbitron'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation } from '../navigation/Index';


import { CreateAccount, Dashboard, Registration,  } from './index';
import { createStackNavigator } from '@react-navigation/stack';
import RecoverAccount from './recoverAccount/component';
import SeedPhrase from './seedphrase/component';
import SeedPhraseFinalPage from './seedphrase2/component';

 const Stack = createStackNavigator()

 type navigation = {
   navigation: any
 }

export const HomePlaceHolder = ({ navigation }: navigation) => {
  let [fontsLoaded, error] = useFonts({
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
    Orbitron_900Black 
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View 
      style={styles.container}
      >
        <View style={styles.ecslipe3}></View>
        <View style={styles.eclipse2}></View>

      <View style={styles.buttonTextBoxContainer}>
        <View style={styles.logo} >
          <Text style= {styles.logoText}>
            JA$IRI
          </Text>
        </View>
<<<<<<< HEAD
        <View style={styles.textBox}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.account}>add Account</Text>
            </TouchableOpacity>
        </View>
      </View>
=======
      
        <View style={styles.textBox}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.account}>add Account</Text>
          </TouchableOpacity>
        </View>
         
       
>>>>>>> 78e92ce (update navigation and screens)
>>>>>>> fd15565 (modified the registration and home files)
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
<<<<<<< HEAD
    backgroundColor: '#E3E8E7',
    
  },

  buttonTextBoxContainer:{
    height: '100%',
    justifyContent: 'flex-end',
  },

=======
    backgroundColor: '#E3E8E7'
  },
>>>>>>> fd15565 (modified the registration and home files)
  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    padding: 10,
    width: 325,
    height: 42,
    borderRadius: 15,
  },
  logo: {
<<<<<<< HEAD
   display: 'flex',
   alignItems: 'center',
   marginBottom: 30
=======
   bottom: 320,
   left: 90,
   right: 97,
   width: 177,
   height: 38,
   top: 420,
   display: 'flex',
   alignItems: 'center',
>>>>>>> fd15565 (modified the registration and home files)
  },

 logoText: {
  fontFamily: 'Orbitron_400Regular',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 42,
  lineHeight: 45,
  color: '#78B9B1'
 },

 textBox: {
<<<<<<< HEAD
  alignItems: 'center',
=======
  top: 55
>>>>>>> fd15565 (modified the registration and home files)
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
          <Stack.Screen name="Recover Account" component={RecoverAccount} />   
          <Stack.Screen name="Seed Phrase" component={SeedPhrase} /> 
          <Stack.Screen name="Seed Phrase Final Page" component={SeedPhraseFinalPage} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Group> 
      </Stack.Navigator>
    )
  }
