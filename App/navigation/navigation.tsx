// import ReactDOM from 'react-dom'
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SettingsScreen, Success, Transact } from '../screens';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TabBar } from './tab-bar';
import { Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';


import { createStackNavigator } from "@react-navigation/stack"
import { Receive, SendToken } from '../components';
import { QrScanner } from "../components/qrScanner"
import { Home, Registration, CreateAccount } from "../screens"
import { Login, CreatePin } from '../screens';
import { Dashboard } from '../screens';
import RecoverAccount from "../screens/recoverAccount/component"
import SeedPhrase from "../screens/seedphrase/component"
import { SeedPhraseFinalPage } from '../screens';
import { Error } from '../screens/error';
import { WalletConnectComponent } from '../screens/WalletConnect';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Token } from '../screens';
import { Agent, AgentSignUp, AgentDashboard } from '../screens';

import Splash from '../screens/splash/component';

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();

export const DashBoardNavigation = () => {
  return (

    <Tab.Navigator
      initialRouteName="Main"
      tabBar={({ state, descriptors, navigation }) => <TabBar state={state} descriptors={descriptors} navigation={navigation} />}
      screenOptions={{
        tabBarStyle: styles.tabBar,
        header: () => <View></View>

      }}
    >

      <Tab.Screen
        name="Main"
        component={Dashboard}
        options={{
          title: 'Main',

          header: () => <Header title={'Dashboard'} />,
        }

        }

      />
      <Tab.Screen name="Contacts" component={AgentDashboard} />
      <Tab.Screen name="Notification" component={View} />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',

          header: () => <Header title={'Settings'} />,
        }}
      />
      {/* <Tab.Screen name="Transact" component={Transact} /> */}
      <Tab.Screen name="Transact" component={Transact}
        options={{

        }}
      />
      <Tab.Screen name="AgentSignUp" component={AgentSignUp} />
      <Tab.Screen name="Agent" component={Agent} />
      {/* <Tab.Screen name="AgentDashboard" component={AgentDashboard} /> */}
      <Tab.Screen name="Token" component={Token} />
      <Tab.Screen name="Scan QR" component={QrScanner} />
      <Tab.Screen name="Receive" component={Receive} />
      <Tab.Screen name="Send token" component={SendToken} />
      <Tab.Screen
        name="Wallet connect"
        component={WalletConnectComponent}
        options={{
          title: 'Create Account',

          header: () => <Header title={'Wallet connect'} />,
        }}
      />

    </Tab.Navigator>
  )
}


const Header = (props: { title: string }) => {
  const { title } = props
  return (
    <View style={headerStyle.header} >
      <Text style={headerStyle.text}>{title}</Text>
    </View>
  )
}

const headerStyle = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  header: {
    // paddingTop: 50,
    // flex: 1,
    padding: 20,
    width: '100%',
    // borderWidth: 1,


    backgroundColor: '#F2EDED',

  },
})




export const AuthenticationNavigation = () => {
  return (

    <Stack.Navigator
      initialRouteName="Splash"

    //  screenOptions={{
    //      header: ()=><View></View>
    //  }}
    >
      <Stack.Group>
        <Stack.Screen name="Splash" component={Splash}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Home" component={Home}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Registration" component={Registration}
          options={{
            headerTitle: props => null,
            headerStyle: {
              // backgroundColor: '#fff',


            },
            headerRight: () => (
              <Button
                // onPress={() => navigation.navigate("Splash")}
                title="Skip"
                containerStyle={{
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
                type="clear"
                titleStyle={{ color: '#42BDB6' }}
              />
            ),
          }} />
        <Stack.Screen name="Create Account" component={CreateAccount}
          options={{
            headerTitle: props => null,
            headerStyle: {
              // backgroundColor: '#fff',


            },
          }}
        />
        <Stack.Screen name="Recover Account" component={RecoverAccount}
          options={{
            header: () => <View></View>

          }} />

        <Stack.Screen name="Login" component={Login}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Seed Phrase" component={SeedPhrase}
          options={{
            headerTitle: props => null,
            headerStyle: {
            }
          }} />
        <Stack.Screen name="Seed Phrase Final Page" component={SeedPhraseFinalPage}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Dash board" component={DashBoardNavigation}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Error" component={Error}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Success" component={Success}
          options={{
            header: () => <View></View>

          }} />
        <Stack.Screen name="Create password" component={CreatePin}
          options={{
            header: () => <View></View>

          }} />
      </Stack.Group>
    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  tabBar: {
    // height: 90,
    // position: 'relative',
    // backgroundColor: '#fff',
  },

})


