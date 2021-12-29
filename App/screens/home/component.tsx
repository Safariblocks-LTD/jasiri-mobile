// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, width: 375, height: 812, backgroundColor: '#E3E8E7'
 }}>
     <View style={{width: 170, height: 163, overflow: 'hidden', backgroundColor: '#403131', top: -56, left: -24, position: 'absolute', opacity: .1, borderRadius: 130}}></View>
     <View style={{width: 170, height: 163, left: -59, backgroundColor: '#8E5858', opacity: .05, position: 'absolute', borderRadius: 100}}></View>
     <View>
       <Text>
       JA$IRI 
       </Text>
     </View>
     <View>
     <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text>add account</Text>
          </TouchableOpacity>
     </View>
        {/* <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            You are on Splash Screen?????......
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Settings')
            }>
            <Text>Go to settng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text>create account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.account}
            onPress={() => navigation.navigate('Transactions')}>
            <Text>ADD ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.account}>
            <Text>ADD ACCOUNT</Text>
          </TouchableOpacity> */}
        {/* </View>
       <View style={{width: 40, backgroundColor: '#DDDDDD', borderRadius: 50, height: 23 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    padding: 10,
    width: 325,
    left: 15,
    bottom: -530,
    height: 42,
    // marginTop: 16,
    borderRadius: 15,
    position: 'absolute',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 16,
    textTransform: 'uppercase'
    // left: 32.8%,
    // right: 29.87%,
    // top: 89.16%,
    // bottom: 8.87%,
    // fontfamily: Open Sans,
    // font-style: normal,
    // font-weight: bold,
    // font-size: 18px,
    // line-height: 16px,
  },
  account: {
    width: 325,
    height: 42,
    top: 711,
    left: 25,
    borderRadius: 15,
    backgroundColor: '#3BD5C2',
    color: 'black'

  }
});
export default HomeScreen;
