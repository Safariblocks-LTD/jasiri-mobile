import * as React from 'react';
import { View, StyleSheet, Vibration, Alert, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setData, setWalletConnectURI } from '../redux';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NormalButton } from './common';
import { useNavigation } from '@react-navigation/native';


export const QrScanner = () => {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const [scannedData, setScannedData] = React.useState<string | null>(null);

  const navigator = useNavigation()




  // const walletConnect = useSelector((state: RootState)=>state.walletConnectScanner.walletConnect)

  const dispatch = useDispatch()

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

    })();

  }, []);


  //   React.useEffect(() => { 
  //     && setShow(true)
  // }, [hasPermission]);


  React.useEffect(() => {
    scannedData && dispatch(setData(scannedData));

    setScannedData(null);
    const history = navigator.getState().routeNames;
    (scannedData && navigator.navigate(history[history.length - 1]))
    // (scannedData && navigation.navigate('Send token'))
  }, [scannedData]);


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
    const history = navigator.getState().routeNames
    console.log(history)
    // navigator.navigate(history[history.length - 1])
     navigator.goBack()

  }



  return (

    <View style={styles.container}>
      <View style={styles.scanner}>
        {hasPermission && !scannedData && <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={[StyleSheet.absoluteFillObject, styles.container]}
        />}
      </View>

      {/* <BarCodeScanner
   
        style={[StyleSheet.absoluteFill, styles.container]}>
    
      </BarCodeScanner> */}

      <NormalButton title='Cancel' clickHandler={handleCancel} style={styles.button} />



    </View>
  );
}

const { width } = Dimensions.get('window')
const qrSize = width * 0.7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1
  },

  scanner: {
    flex: 0.7,
    overflow: 'hidden',
    width: 300,
    height: 200,
  },
  button: {
    height: 40,
    width: '40%',
    borderRadius: 20,
    marginTop: '40%',
  },

})