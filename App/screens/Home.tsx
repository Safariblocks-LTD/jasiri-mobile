// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image, Modal
} from 'react-native';







export const Home = ({ navigation }) => {
  
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
                    onPress={() => navigation.navigate('Registration')}>
                      <Text style={styles.account}>add Account</Text>
                </TouchableOpacity>
          </View>
      </View>
    
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1, 
    padding: 16, 
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#E3E8E7',
    justifyContent: 'space-between',
  },

  eclipseContainer: {
    top: 0,
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


