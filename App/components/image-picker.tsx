import * as React from 'react'
import  { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    Modal,
    Image,
    Alert,
    Button
  } from 'react-native';

  import SvgQRCode from 'react-native-qrcode-svg';

export const MyImagePicker =()=> {
  const [image, setImage] = useState(null);

  function LogoFromFile() {
    let logoFromFile = require('../../../assets/images/icon.png');
  
    return <SvgQRCode value="Just some string value" logo={logoFromFile} />;
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Button  onPress={pickImage} title='pick' > </Button>
      <Text>hello</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}