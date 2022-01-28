import { View, StyleSheet, Vibration, Alert, Text, TouchableOpacity, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setData, setShowScanner } from '../redux';
import { Camera } from 'expo-camera';


export  const QrScanner =({navigation})=>{
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [show, setShow]= React.useState<boolean>(true);
  const [scannedData, setScannedData]= React.useState<string|null>(null);


  const dispatch=useDispatch()

  const scanned = useSelector((state: RootState)=>state.scanned.data)
  const showS = useSelector((state: RootState)=>state.scanned.showScanner)

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();      
      setHasPermission(status === 'granted');
    })();
    
  }, []);


  // React.useEffect(() => {
   
    
  //   scannedData && !show && 
    
  // }, [scannedData, show]);
 

  const handleBarCodeScanned = ({type, data}) => {
    console.log(data)
      setShow(false)
      // // dispatch(setShowScanner(false)) 
      setScannedData(data)   
      Vibration.vibrate()        
      dispatch(setData(data))  
      // console.log(scanned) 
      setShow(false) 
      navigation.navigate('Send token') 
       
  };

  if (hasPermission === false) {
    return Alert.alert('No access to camera.');
  }

  return (

    <View style={styles.container}>
      {show && <Camera
        onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
        // type={type}
        // barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
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