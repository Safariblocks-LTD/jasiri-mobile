import * as React from 'react';
import { View, StyleSheet, Vibration, Alert, Text, TouchableOpacity, Dimensions, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setData, setURI, setWalletConnectURI } from '../redux';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NormalButton } from './common';
import { useNavigation } from '@react-navigation/native';


import BarcodeMask from 'react-native-barcode-mask';
import { useFocusEffect } from '@react-navigation/native';
import routes from '../navigation/routes';


export const QrScanner = () => {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const [scannedData, setScannedData] = React.useState<string | null>(null);
  const back = useSelector((state: RootState)=>state.routes.back)
  const isLoggedIn = useSelector((state: RootState) => state.account.isLoggedIn)
  const navigation = useNavigation()

 

  const dispatch = useDispatch()

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

    })();

  }, []);

  

  


    
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
    
        console.log(back)
         navigation.navigate(back)
         return true
       };
    
     
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [back])
  );
 


  React.useEffect(() => {
      scannedData && back === routes.WC && dispatch(setURI(scannedData));
      scannedData && back ===routes.SEND_TOKEN && dispatch(setData(scannedData));
      console.log(back)
        // setScannedData(null);
     scannedData && navigation.navigate(back)
     
      return setScannedData(null)

  }, [scannedData, back]);


  const handleBarCodeScanned = ({ data }: any) => {
    console.log(data)
    Vibration.vibrate()
    setShow(false)
    setScannedData(data)
   


  };

  if (hasPermission === false) {
    Alert.alert('No access to camera.');

  }

  const handleCancel = () => {
    navigation.navigate(back)
    


  }



  return (

    <View style={styles.container}>
      {/* <View style={styles.scanner}> */}
        {
        
        hasPermission && !scannedData && <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          // barCodeSize= {{he}}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={[StyleSheet.absoluteFillObject]}
        > 
        
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
        <View style={styles.mask}>
          <NormalButton title='Cancel' clickHandler={handleCancel} style={styles.button} />
        </View>
        </BarCodeScanner>
          
        }
     
      



    </View>
  );
}

const { width, height } = Dimensions.get('window')
// const qrSize = width * 0.7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // borderWidth: 1
  },

  mask: { flex: 1, backgroundColor: 'transparent',flexDirection: 'column', 
  justifyContent: 'flex-end',
  // : 'column',
  // alignItems: 'flex-end',
  
  // borderWidth: 1,
  // borderColor: 'red'

},

 
  button: {
    height: 40,
    width: '40%',
    borderRadius: 20,
    marginTop: '40%',
    alignSelf: 'center',
    margin: 40
    
    // jus
  },

})