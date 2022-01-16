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
  Image,
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


import { CreateAccount, Registration, SendStack,  } from './index';
import { createStackNavigator } from '@react-navigation/stack';
import RecoverAccount from './recoverAccount/component';
import SeedPhrase from './seedphrase/component';
import SeedPhraseFinalPage from './seedphrase2/component';
import Dashboard  from './dashboard/component';
import Send from './sendReceiveJasiri/send/Component';
import { Token } from '../components/dashboard/tokens/Index';
import { QrScanner } from '../components/qrScanner';

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
    <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={styles.container} >
          <View style={styles.eclipseContainer}>
              <View style={styles.ecslipe3}></View>
              <View style={styles.eclipse2}></View>
          </View>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/undraw_transfer_money_rywa.png')}
                style={{ width: 250, height: 250 }}
              /> 
          </View>

          <View style={styles.logo} >
                <Image
                  source={require('../assets/jasiri.png')}
                  style={{ width: 200, height: 40 }}
                />
          </View>
              

          <View style={styles.buttonTextBoxContainer}>
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
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E3E8E7',
    justifyContent: 'space-between',
  },

  eclipseContainer: {
    top: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  ecslipe3: {
    width: 186,
    height: 163,
    overflow: 'hidden', 
    backgroundColor: '#403131', 
    top: -56, 
    left: -24, 
    position: 'absolute', 
    opacity: .09, 
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
    opacity: .07, 
    borderRadius: 130
  },
  imageContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center'
    },

  buttonTextBoxContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    justifyContent: 'center',
    width: '80%',
    height: 42,
    borderRadius: 15,
  },
  
  account: {
    backgroundColor: '#3BD5C2',
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'normal',
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
          <Stack.Screen name="Token" component={Token} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Send" component={Send} /> 
          <Stack.Screen name="Scan QR" component={QrScanner} /> 
        </Stack.Group> 
      </Stack.Navigator>
    )
    }
