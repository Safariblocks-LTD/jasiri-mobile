// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';


export const Token = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
         
          <TextInput
           editable
           maxLength={40}
           style={styles.textInput}
          >
          
          </TextInput>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text>Receive</Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#79E7E7',
    padding: 10,
    width: 150,
    height: 50,
    margin: 16,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row'

  },
  textInput: {
    width: 350,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10
  }
});

