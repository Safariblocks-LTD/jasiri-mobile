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


import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import AppCenter from 'appcenter';



 


(async()=>{
  // await AppCenter.start()
  await AppCenter.setEnabled(true);
  await Analytics.setEnabled(true);
  const hadLowMemoryWarning = await Crashes.hasReceivedMemoryWarningInLastSession();
  const didCrash = await Crashes.hasCrashedInLastSession();
  const crashReport = await Crashes.lastSessionCrashReport();
  console.log(hadLowMemoryWarning, didCrash, crashReport)

  const installId = await AppCenter.getInstallId();

  console.log(installId, await AppCenter.isNetworkRequestsAllowed(), await AppCenter.isEnabled())

 
  
})();
// throw new Error('This is a test javascript crash!');

Crashes.generateTestCrash();

Crashes.setListener({

   shouldProcess: function (report) {
     
       console.log(report)
       return true; // return true if the crash report should be processed, otherwise false.
   },
 
   // Other callbacks must also be defined at the same time if used.
   // Default values are used if a method with return parameter isn't defined.
 });

// throw new Error('This is a test javascript crash!');



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


