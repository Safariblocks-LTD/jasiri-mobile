import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../redux';


export  function QrScanner({navigation}) {
  const [hasPermission, setHasPermission] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      console.log(status)
    })();
  }, []);

  const dispatch=useDispatch()

  const handleBarCodeScanned = ({ type, data }) => {
    dispatch(setData(data))
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('Send')
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: 800
    },
})