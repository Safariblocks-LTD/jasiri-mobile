// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image, Modal, BackHandler
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { styles } from './styles';
import Loader from '../components/loading';
import { useFocusEffect } from '@react-navigation/native';





export const Home = ({ navigation }) => {

  const isLoggedIn = useSelector((state: RootState) => state.account.isLoggedIn)
  React.useEffect(() => {
    isLoggedIn && navigation.navigate("Dash board")
  })


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
    <>
      {!isLoggedIn && <View style={styles.container} >
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
      </View> }
    </>

  );
}


