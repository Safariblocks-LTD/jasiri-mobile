import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// See the README file

import SvgQRCode from 'react-native-qrcode-svg';
import CustomQRCodes from './custom-qr-codes';

// Simple usage, defaults for all but the value
function Simple() {
  return <SvgQRCode value="http://example.com" />;
}

// 20% (default) sized logo from local file string with white logo backdrop
function LogoFromFile() {
  let logoFromFile = require('../../../assets/images/icon.png');

  return <SvgQRCode value="Just some string value" logo={logoFromFile} />;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Simple />
        {/* The logo doesn't display on Expo Web */}
        <LogoFromFile />
      </View>

      <CustomQRCodes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
