import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Share} from 'react-native';

import * as Clipboard from 'expo-clipboard';
// import * as Sharing from 'expo-sharing'


// import SvgQRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';


// Simple usage, defaults for all but the value
function Simple() {
  const address = useSelector((state: RootState)=>state.newAccount.address)
  return (
    // <SvgQRCode size={150} value={address} /><

    <></>
  );
}

// 20% (default) sized logo from local file string with white logo backdrop
// function LogoFromFile() {
//   let logoFromFile = require('../assets/images/icon.png');

//   return <SvgQRCode value="Just some string value" logo={logoFromFile} />;
// }

export default function App() {
  const address = useSelector((state: RootState)=>state.newAccount.address)
  const copyAddressToClipboard = () => {
    Clipboard.setString(address)
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: address
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    // <ScrollView>
    <View style={styles.container}>
        
      <View  style={styles.qrContainer}>
        <Simple />
        {/* The logo doesn't display on Expo Web */}
        {/* <LogoFromFile /> */}
      </View>
      <View style={styles.address}>
          <Text>{address}</Text>
      </View>

      <View style={styles.buttonsContainer}>
          <TouchableOpacity 
          style={styles.button} 
          onPress={copyAddressToClipboard}
          >
              <Image
              source={require('../assets/copy.png')}
              ></Image>
              <Text style={styles.buttonText}>copy</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button} 
          onPress={onShare}
          >
              <Image
              source={require('../assets/share.png')}
              ></Image>
              <Text style={styles.buttonText}>share</Text>
          </TouchableOpacity>

    </View>

      {/* <CustomQRCodes /> */}
     
    </View>
   
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
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: 20,
    //   height: '30%',
    //   width: '60%'
  },
  address: {
    // flex: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    // borderWidth: 3,
    width: '80%',
    marginTop: '40%',
    height: 60,
    // height: 800,
    borderRadius: 10
  },
  buttonsContainer: {
      flexDirection: 'row',
      //  borderWidth: 3,
       width: '80%',
       justifyContent: 'space-between',
       marginTop: 20
  },
  button: {
      backgroundColor: '#79E7E7',
      width: '40%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'row'
  },
  buttonText: {
      fontSize: 18,
      margin: 2,
      fontWeight: 'bold'
  }
});
