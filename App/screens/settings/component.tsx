// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

type route = {
  route: string,
  navigation: any,
}

export const SettingsScreen = ({ navigation }: route) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text> Settings </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

