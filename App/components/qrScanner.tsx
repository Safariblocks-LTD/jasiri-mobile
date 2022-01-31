import * as React from 'react';
import { View, StyleSheet, Vibration, Alert, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setData } from '../redux';
import { Camera } from 'expo-camera';


export  const  QrScanner =(props: {route: any, navigation: any})=>{
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [show, setShow]= React.useState<boolean>(true);
  const [scannedData, setScannedData]= React.useState<string|null>(null);


  const dispatch=useDispatch()

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();      
      setHasPermission(status === 'granted');
    })();
    
  }, []);


  React.useEffect(() => { 
      scannedData && dispatch(setData(scannedData)) &&
      props.navigation.navigate('Send token')
  }, [scannedData]);
 

  const handleBarCodeScanned = ({data}: any) => {
      console.log(data) 
      Vibration.vibrate()    
      setShow(false)
      setScannedData(data) 
     
  };

  if (hasPermission === false) {
     Alert.alert('No access to camera.');
     props.navigation.navigate('Send token')
  }

  return (

    <View style={styles.container}>
      {show && <Camera
        onBarCodeScanned={handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: ['qr'],
        }}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View style={styles.overlay}>
          <TouchableOpacity>
          <Text style={{fontSize: 15}}>select image</Text>
          </TouchableOpacity>
          
        </View>
     
        {/* <BarcodeMask edgeColor="#62B1F6"/> */}
        </Camera>}
        
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      width: '100%',
      height: '100%'
  },    
  overlay: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end' ,
    alignItems: 'flex-end',
    height: '100%',
    width: '90%',
    margin: 10,
    // borderWidth: 2
  }
    
})