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
    <View style={{width: '100%', height: '100%', backgroundColor: '#E3E8E7', marginTop: 35}} >
       <ScrollView >
          <View style={styles.container} >
            <View style={styles.head}>
              <Text style={styles.headText}>Settings</Text>
            </View>
           
           <View style={{marginLeft: 8}}>
           <View style={{marginTop: 15, ...styles.content}}>
                <Text style={styles.categorty_header}> general settings</Text>
                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/Vector9.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >fiat currency</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 5}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/Vector10.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >Language</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/Vector11.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >notifications</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.content_body}>
                <Text style={styles.categorty_header}> security</Text>
                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={{width: 23, height: 23}} source={require('../../assets/Vector12.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >set/change password</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/Vector13.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >biometric authentication</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                
                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/vector14.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >wallet connect sessions</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/Vector15.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >developer settings</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <View style={styles.section_image}>
                    <Image style={styles.image} source={require('../../assets/Vector16.png')} />
                  </View>
                  <View style={styles.section_container}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >reset wallet</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.content_main}>
                <Text style={styles.categorty_header}> legal</Text>
                
                <View style={styles.section}>
                  <View style={styles.section_footer}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >terms of service</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <View style={styles.section_footer}>
                    <View style={styles.section_body}>
                      <Text style={styles.category_text} >private policy</Text>
                      <Image source={require('../../assets/Vector17.png')} />
                    </View>
                    <View style={{width: '100%', padding: 10}}>
                      <View style={{width: '100%', ...styles.category_divider}}></View>
                    </View>
                  </View>
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
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // marginLeft: 20
  },
  categorty_header: {
    fontSize: 19, 
    fontWeight: 'bold', 
    textTransform: 'capitalize',
    marginLeft: 20
  },
  category_container: {
    flexDirection: 'column',
    width: '100%', 
    marginTop: 20
  },
  section: {
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 10
  },
  section_image: {
    width: '10%', 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    paddingBottom: 5, 
    height: 50 
  },
  section_container: {
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '90%', 
    height: 50
  },
  section_body: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',  
    width: '100%', 
    padding: 10
  },
  image: {
    width: 26, 
    height: 26
  },
  section_footer: {
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '90%', 
    height: 50, 
    marginLeft: 30
  },
  category_body: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  category_text: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    textTransform: 'capitalize'
  },
  category_divider: { 
    backgroundColor: 'grey',  
    height: 1,
    // borderWidth: 1
  },
  content_body: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  },
  content_main: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20
  },
});

