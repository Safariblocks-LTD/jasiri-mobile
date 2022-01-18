import { Text, View, StyleSheet, Button, SafeAreaView, Vibration, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner , BarCodeScannerResult} from 'expo-barcode-scanner';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../redux';
import BarcodeMask from 'react-native-barcode-mask';





const finderWidth: number = 280;
const finderHeight: number = 280;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;




export  function QrScanner({navigation}) {
  const [hasPermission, setHasPermission] = React.useState<boolean|null>(null);
  const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back);
  const [scanned, setScanned] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      console.log(status)
    })();
  }, []);

  const dispatch=useDispatch()

  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {

    if (!scanned) {
          const {type, data, bounds: {origin} = {}} = scanningResult;
          // @ts-ignore
          const {x, y} = origin;
          if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
              setScanned(true);
              Vibration.vibrate()
              dispatch(setData(data))
              navigation.goBack()             
          }
      }
  };

  if (hasPermission === false) {
    return Alert.alert('No access to camera.');
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        type={type}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >

      <View
          style={{
              // flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
          }}>
          <TouchableOpacity
              onPress={() => {setType(
                      type === BarCodeScanner.Constants.Type.back? BarCodeScanner.Constants.Type.front
                          : BarCodeScanner.Constants.Type.back
                  );
              }}>
              <Text style={{fontSize: 18, margin: 5, color: 'white',}}> Flip </Text>
          </TouchableOpacity>
      </View>
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
        </BarCodeScanner>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: height
  },    
    
})