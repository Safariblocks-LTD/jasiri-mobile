import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// See the README file

import SvgQRCode from 'react-native-qrcode-svg';
import CustomQRCodes from './custom-qr-codes';

// Simple usage, defaults for all but the value
function Simple() {
  return <SvgQRCode value="http://example.com" />;
}

// 20% (default) sized logo from local file string with white logo backdrop
function LogoFromFile() {
  let logoFromFile = require('../../../assets/images/icon.png');

  return <SvgQRCode value="Just some string value" logo={logoFromFile} />;
}

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
        
      <View  style={styles.qrContainer}>
        <Simple />
        {/* The logo doesn't display on Expo Web */}
        {/* <LogoFromFile /> */}
      </View>
      <View style={styles.address}>

      </View>

      <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>copy</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>share</Text></TouchableOpacity>

    </View>

      {/* <CustomQRCodes /> */}
     
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center',
    // backgroundColor: '#ecf0f1',
    // borderWidth: 3,
    height: 800
  },
  qrContainer: {
    //   borderWidth: 3,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: 20,
    //   height: '30%',
    //   width: '60%'
  },
  address: {
    // flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderWidth: 3,
    width: '80%',
    marginTop: '50%',
    height: 50,
    // height: 800,
    borderRadius: 10
  },
  buttons: {
      flexDirection: 'row'
  },
  button: {
      backgroundColor: '#79E7E7',
      margin: 30,
      height: 40,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  buttonText: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
