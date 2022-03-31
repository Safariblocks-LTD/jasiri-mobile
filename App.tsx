import 'fastestsmallesttextencoderdecoder'
// import * as Crypto from 'expo-crypto';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux'
import { store } from './App/redux/store'
// import HomeStack from './App/screens/index'
import {
  AuthenticationNavigation
} from './App/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const Navigation = () => {



  return (
    <NavigationContainer>
      <AuthenticationNavigation />

    </NavigationContainer>
  )
}



export default function App() {



  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <SafeAreaProvider>

          <Navigation />



        </SafeAreaProvider>

      </Provider>
    </NativeBaseProvider>

  );
}

// export default withWalletConnect(App, {
//   redirectUrl: 'myapp://',
//   bridge :"https://bridge.walletconnect.org",
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
// })


