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



export const SettingsScreen = ({ navigation }: any) => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#E3E8E7', borderWidth: 1}} >
       <ScrollView >
          <View style={styles.container} >
            <View style={styles.head}>
              <Text style={styles.headText}>Settings</Text>
            </View>

            <View style={{width: '100%',marginTop: 15, ...styles.content}}>
                <Text style={styles.categorty_header}> general settings</Text>
                <View style={styles.category_container}>
                    <View  style={styles.category_body}>
                        <Image source={require('../../assets/Vector9.png')} style={{marginLeft: 10}} /> 
                        <Text style={styles.category_text} >fiat currency</Text>
                        <Image style={{marginLeft: 200}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>

                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10}} source={require('../../assets/Vector10.png')} /> 
                        <Text  style={styles.category_text}>Language</Text>
                        <Image style={{marginLeft: 220}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider} ></View>
                </View>

                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10}} source={require('../../assets/Vector11.png')} /> 
                        <Text style={styles.category_text}>notificationa</Text>
                        <Image style={{marginLeft: 205}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>
              </View>

              <View style={styles.content_body}>
                <Text style={styles.categorty_header}> security</Text>
                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10,}} source={require('../../assets/Vector12.png')} /> 
                        <Text style={styles.category_text}>set/change password</Text>
                        <Image style={{marginLeft: 145,}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>

                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10,}} source={require('../../assets/Vector13.png')} /> 
                        <Text style={styles.category_text}>biometric authentication</Text>
                        <Image style={{marginLeft: 125,}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>

                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10,}} source={require('../../assets/vector14.png')} /> 
                        <Text style={styles.category_text}>wallet connect sessions </Text>
                        <Image style={{marginLeft: 120,}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>

                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10,}} source={require('../../assets/Vector15.png')} /> 
                        <Text style={styles.category_text}>developer settings</Text>
                        <Image style={{marginLeft: 160,}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>

                <View style={styles.category_container}>
                    <View style={styles.category_body}>
                        <Image style={{marginLeft: 10,}} source={require('../../assets/Vector16.png')} /> 
                        <Text style={styles.category_text}>reset wallet</Text>
                        <Image style={{marginLeft: 200,}} source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={styles.category_divider}></View>
                </View>
              </View>

              <View style={styles.content_main}>
                <Text style={styles.categorty_header}> legal</Text>
                <View style={{display: 'flex', marginLeft: 50, alignItems: 'flex-start', marginTop: 20, }}>
                  <View style={styles.category_container}>
                      <View style={styles.category_body}>
                          <Text style={styles.category_text}>terms of service</Text>
                          <Image style={{marginLeft: 150,}} source={require('../../assets/Vector17.png')} />
                      </View>
                      <View style={styles.category_divider}></View>
                  </View>

                  <View style={styles.category_container}>
                      <View style={styles.category_body}>
                          <Text style={styles.category_text}>private policy</Text>
                          <Image style={{marginLeft: 172,}} source={require('../../assets/Vector17.png')} />
                      </View>
                      <View style={styles.category_divider}></View>
                  </View>
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
    // borderWidth: 1
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
  categorty_header: {
    fontSize: 19, 
    fontWeight: 'bold', 
    textTransform: 'capitalize',
    marginLeft: 10
  },
  category_container: {
    display: 'flex', 
    flexDirection: 'column',
    width: '100%', 
    marginTop: 20
  },
  category_body: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  category_text: {
    marginLeft: 20, 
    fontSize: 14, 
    fontWeight: 'bold', 
    textTransform: 'capitalize'
  },
  category_divider: {
    width: '75%', 
    backgroundColor: 'black',  
    marginLeft: 55,
    marginTop: 25,
    borderWidth: 1
  },
  content_body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  },
  content_main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 20
  },
});

