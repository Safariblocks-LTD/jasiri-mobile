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
  Linking,
  Alert

} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn, setAddress, setMnemonic, RootState, setWalletConnect, setSuccessMessage, setErrorMessage } from '../../redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WC } from '../../services/wallet-connect'
import WalletConnectClient from '@walletconnect/client';
import { useNavigation } from '@react-navigation/native';
import { Center, Stack, VStack, Divider, Heading, HStack } from "native-base";
import { styles } from "./styles";
import { StyleText, MyAppText, textStyles } from '../../components/common/appTexts';
import routes from '../../navigation/routes';



export const SettingsScreen = () => {
  const isLoggedIn = useSelector((state: RootState) => state.account.isLoggedIn)
  const walletConnectURI = useSelector((state: RootState) => state.walletConnectURI.URI)
  const dispatch = useDispatch()

  const navigator = useNavigation()

  const handleWConnect = () => {
    navigator.navigate(routes.WC)
  };



  const handleLogout = () => {
    (async () => {
      try {

        await AsyncStorage.removeItem('accountData')
        dispatch(setIsLoggedIn(false))
        console.log('removed')
        navigator.navigate(routes.HOME)
      }
      catch (e) {
        dispatch(setErrorMessage(e.message))
        navigator.navigate(routes.ERROR)
      }
    })();

  }
     const styled = {
        heading: (scale) => {
            const fontSize = textStyles.fontSize * scale;

            return {
                lineHeight: fontSize * 1.4,
                marginBottom: 12,
                fontWeight: "bold",
                fontSize
            };
        }
    }
  return (

    <ScrollView >
      <View style={{ width: '100%', height: '100%', backgroundColor: '#E3E8E7' }} >
        <View style={styles.container} >
         

          <View style={{ marginLeft: 8 }}>
            <View style={{ marginTop: 15, ...styles.content }}>
              <MyAppText style={styles.categorty_header}> general settings</MyAppText>
              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/Vector9.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >fiat currency</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 5 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/Vector10.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >Language</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 4 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>
{/* <Divider my="8" bg="#000000" thickness="2" mx="5" width={350} /> */}
              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/Vector11.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >notifications</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 10 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.content_body}>
              <MyAppText style={styles.categorty_header}> security</MyAppText>
              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={{ width: 23, height: 23 }} source={require('../../assets/Vector12.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >set/change password</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 4 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/Vector13.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >biometric authentication</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 10 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>


              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/vector14.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <TouchableOpacity onPress={handleWConnect}>
                      <MyAppText style={styles.category_text} >wallet connect sessions</MyAppText>
                    </TouchableOpacity>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 10 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/Vector15.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >developer settings</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 10 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <View style={styles.section_image}>
                  <Image style={styles.image} source={require('../../assets/Vector16.png')} />
                </View>
                <View style={styles.section_container}>
                  <View style={styles.section_body}>
                    <TouchableOpacity onPress={handleLogout}>
                      <MyAppText style={styles.category_text} >reset wallet</MyAppText>
                    </TouchableOpacity>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 10 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.content_main}>
              <MyAppText style={styles.categorty_header}> legal</MyAppText>

              <View style={styles.section}>
                <View style={styles.section_footer}>
                  <View style={styles.section_body}>
                    <Text style={styles.category_text} >terms of service</Text>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 10 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <View style={styles.section_footer}>
                  <View style={styles.section_body}>
                    <MyAppText style={styles.category_text} >private policy</MyAppText>
                    <Image source={require('../../assets/Vector17.png')} />
                  </View>
                  <View style={{ width: '100%', padding: 4 }}>
                    <View style={{ width: '100%', ...styles.category_divider }}></View>
                  </View>
                </View>
              </View>



            </View>

          </View>

        </View>
      </View>
    </ScrollView>


  );
};


