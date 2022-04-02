// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image, Modal, BackHandler, 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setAddress, setIsLoggedIn, setMnemonic } from '../redux';
import { styles } from './styles';
import Loader from '../components/loading';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';







export const Home = () => {

 const navigation = useNavigation()
  

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
    
        
         BackHandler.exitApp()
         return true
       };
    
     
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );



  return (
    
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
            onPress={() => navigation.navigate(routes.REGISTRATION)}>
            <Text style={styles.account}>add Account</Text>
          </TouchableOpacity>
        </View>
      </View> 
    

  );
}


