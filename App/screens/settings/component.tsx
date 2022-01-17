// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type route = {
  route: string,
  navigation: any,
}

export const SettingsScreen = ({ navigation }: route) => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#E3E8E7', borderWidth: 1}} >
       <ScrollView >
          <View style={styles.container} >
            <View style={styles.head}>
              <Text style={styles.headText}>Settings</Text>
            </View>

            <View style={{width: '100%',marginTop: 15, ...styles.content}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textTransform: 'capitalize'}}> general settings</Text>
                <View style={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: 10}}>
                    <View  style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/Vector9.png')} style={{marginLeft: 10}} /> 
                        <Text style={{marginLeft: 20, fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize'}} >fiat currency</Text>
                        <Image style={{marginLeft: 200}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{ width: '75%', backgroundColor: 'black', height: 2, marginLeft: 55, marginTop: 25}}></View>
                </View>

                <View style={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: 20}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{marginLeft: 10}} source={require('../../assets/Vector10.png')} /> 
                        <Text  style={{marginLeft: 20, fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize'}}>Language</Text>
                        <Image style={{marginLeft: 220}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{ width: '75%', backgroundColor: 'black', height: 2, marginLeft: 55, marginTop: 25}} ></View>
                </View>

                <View style={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: 20}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{marginLeft: 10}} source={require('../../assets/Vector11.png')} /> 
                        <Text style={{marginLeft: 20, fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize'}}>notificationa</Text>
                        <Image style={{marginLeft: 210}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{ width: '75%', backgroundColor: 'black', height: 2, marginLeft: 55, marginTop: 25}}></View>
                </View>
              </View>

              <View style={styles.content_body}>
                <Text> security</Text>
                <View>
                    <View>
                        <Image source={require('../../assets/Vector12.png')} /> 
                        <Text>set/change password</Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>

                <View>
                    <View>
                        <Image source={require('../../assets/Vector13.png')} /> 
                        <Text>biometric authentication</Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>

                <View>
                    <View>
                        <Image source={require('../../assets/Vector13.png')} /> 
                        <Text>wallet connect sessions </Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>

                <View>
                    <View>
                        <Image source={require('../../assets/Vector15.png')} /> 
                        <Text>developer settings</Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>

                <View>
                    <View>
                        <Image source={require('../../assets/Vector16.png')} /> 
                        <Text>reset wallet</Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>
              </View>

              <View style={styles.content_main}>
                <Text> legal</Text>
                <View>
                    <View>
                        <Text>terms of service</Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>
                <View>
                    <View>
                        <Text>private policy</Text>
                        <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View></View>
                </View>
              </View>
            </View>
    </ScrollView>
    </View>
    
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
  container: {
    borderWidth: 1
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'capitalize',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content_body: {},
  content_main: {},
});

