import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Token } from "../components/dashboard"
import Receive from "../components/dashboard/receive/component"
import { QrScanner } from "../components/qrScanner"
import { HomePlaceHolder, Registration, CreateAccount } from "../screens"
import Dashboard from "../screens/dashboard/component"
import RecoverAccount from "../screens/recoverAccount/component"
import SeedPhrase from "../screens/seedphrase/component"
import SeedPhraseFinalPage from "../screens/seedphrase2/component"
import { View } from "react-native"

const Stack = createStackNavigator()



export const HomeStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          header: ()=><View></View>
      }}
      >
        <Stack.Group >
          <Stack.Screen name="Home" component={HomePlaceHolder} />   
          <Stack.Screen name="Registration" component={Registration} />   
          <Stack.Screen name="Create Account" component={CreateAccount} />    
          <Stack.Screen name="Recover Account" component={RecoverAccount} />   
          <Stack.Screen name="Seed Phrase" component={SeedPhrase} /> 
          <Stack.Screen name="Seed Phrase Final Page" component={SeedPhraseFinalPage} />
          <Stack.Screen name="Token" component={Token} />
          <Stack.Screen name="Scan QR" component={QrScanner} /> 
          <Stack.Screen name="Receive" component={Receive} /> 
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />         
        </Stack.Group> 
      </Stack.Navigator>
    )
}