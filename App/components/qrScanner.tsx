import { View, StyleSheet, Vibration, Alert, Text, TouchableOpacity, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setData, setShowScanner } from '../redux';


export  const QrScanner =({navigation})=>{
  const [hasPermission, setHasPermission] = React.useState<boolean|null>(null);
  const [show, setShow]= React.useState<boolean>(true);
  const [scannedData, setScannedData]= React.useState<string|null>(null);

  
 

  const dispatch=useDispatch()

  const scanned = useSelector((state: RootState)=>state.scanned.data)
  const showS = useSelector((state: RootState)=>state.scanned.showScanner)

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();      
      setHasPermission(status === 'granted');
    })();
    
  }, []);


  React.useEffect(() => {
   
    
    scannedData && !show && navigation.navigate('Send token') 
    
  }, [show]);
 

  const handleBarCodeScanned = ({type, data}) => {
      setShow(false)
      // dispatch(setShowScanner(false)) 
      setScannedData(data)   
      Vibration.vibrate()        
      dispatch(setData(data))  
      console.log(scanned)  
       
  };

  if (hasPermission === false) {
    return Alert.alert('No access to camera.');
  }

  //open gallary
  // const openGallery = () => {
  //   const options = {
  //     storageOptions: {
  //       path: 'images',
  //       mediaType: 'photo'
  //     },
  //     includeBase64: true
  //   }

  //   launchImageLibrary(options, response => {
  //     console.log("Response", response);
  //     if(response.didCancel){
  //       console.log("User cancelled image picker");
  //     } else if(response.error){
  //       console.log('image pcker error', response.error);
  //     }else if(response.customButton){
  //       console.log(response.assets);
  //     } else {
  //       const source = {uri: 'data:image/jpeg:base64,' }
  //       setImageUri(source)
  //     }
      
  //   })
  // }

  return (
    
    <View style={styles.container}>
      {!scannedData && <BarCodeScanner
        onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
        // type={type}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
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