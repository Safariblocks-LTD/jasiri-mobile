import * as React from 'react';
import { View, StyleSheet, Vibration, Alert, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setData } from '../redux';
import { BarCodeScanner } from 'expo-barcode-scanner';


export  const  QrScanner =({route, navigation})=>{
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [show, setShow]= React.useState<boolean>(false);
  const [scannedData, setScannedData]= React.useState<string|null>(null);


  const dispatch=useDispatch()

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');   
      
    })();
    
  }, []);


  React.useEffect(() => { 
   hasPermission && !scannedData && setShow(true)
}, [hasPermission]);


  React.useEffect(() => { 
      scannedData && dispatch(setData(scannedData)) &&
      navigation.navigate('Send token')
  }, [scannedData]);
 

  const handleBarCodeScanned = ({data}: any) => {
      console.log(data) 
      Vibration.vibrate()    
      setShow(false)
      setScannedData(data) 
     
  };

  if (hasPermission === false) {
     Alert.alert('No access to camera.');
     
  }



  return (

    <View style={styles.container}>
      {show && <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View style={styles.overlay}>
          <TouchableOpacity>
          <Text style={{fontSize: 15}} onPress={() => alert("heeeey")}>select image</Text>
          </TouchableOpacity>
          
        </View>
     
        {/* <BarcodeMask edgeColor="#62B1F6"/> */}
        </BarCodeScanner>}
        
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