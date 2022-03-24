import * as React from 'react'
import { View, Text, ScrollView, Alert, BackHandler, RefreshControl } from 'react-native'
import { StyleSheet } from 'react-native'

// import { accountInfo as getAccountInfo } from '../../services'
// import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { NormalButton } from '../components/common';
import { useNavigation } from '@react-navigation/native';
import WalletConnectClient from '@walletconnect/client';
import { RootState, setErrorMessage, setroutes } from '../redux';
import routes from '../navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleText, MyAppText } from '../components/common/appTexts';
import { Icon, Avatar } from 'react-native-elements'
import { Box, HStack, Spacer, VStack } from "native-base";
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../components/loading';


export const WalletConnectComponent = () => {

    const navigation=useNavigation()
    const uri = useSelector((state: RootState)=>state.scanned.URI)
    const address = useSelector((state: RootState)=>state.newAccount.address)

    const dispatch = useDispatch()
    const navigator = useNavigation()
    const [connections, setConnections] = React.useState<string>()
    const [connecting, setConnecting] = React.useState<boolean>(false)
    const [refreshing, setRefreshing] = React.useState<boolean>(false)

    const onRefresh=()=>{
        setRefreshing(true)
    }

    React.useEffect(() => {
        setRefreshing(false)
        uri && (async () => {
            
            const client = new WalletConnectClient({
                uri: uri,

                clientMeta: {
                    description: "WalletConnect Developer App",
                    url: "https://walletconnect.org",
                    icons: ["https://walletconnect.org/walletconnect-logo.png"],
                    name: "WalletConnect",
                },
                storageOptions: {
                    asyncStorage: AsyncStorage,
                },

            });

            client.on("session_request", (error, payload) => {
                setConnecting(true);
                if (error) {
                    dispatch(setErrorMessage(error.message))
                    setConnecting(false);
                    navigator.navigate(routes.ERROR)
                    return
                } else {
                    console.log('success session_request')
                    console.log(payload)

                    client.approveSession({
                        accounts: [address], chainId: 1,
                    })
                    // stop connecting indicator
                  
                    setConnections(payload.id)
                   
                    setConnecting(false);
                    // navigation.navigate('Success')
                }



            })



            client.on("call_request", (error, payload) => {
                setConnecting(true)
                if (error) {
                    dispatch(setErrorMessage(error.message))
                    navigator.navigate(routes.ERROR)
                }
                console.log(payload)
                client.approveRequest({})
                console.log('success call_request')
                setConnecting(false)
                Alert.alert(JSON.stringify(payload))


            });


            client.on("disconnect", (error, payload) => {
                if (error) {
                    dispatch(setErrorMessage(error.message))
                    navigator.navigate(routes.ERROR)
                }

                console.log(payload)
                setConnections(null)
                console.log('success disconnect')
                Alert.alert('wallet disconnected')
            });

            console.log(client.session.connected)

            !client.session.connected && client.createSession()

            console.log(client.session)
           

        })();
    }, [uri, refreshing])

    React.useEffect(() => {
        console.log(connections)
        console.log(connecting)
    })

    const list = [
        {
            title: 'Jasiri wallet',
            icon: 'av-timer',
            date: "23 Jan 2022"
        },
        {
            title: 'Other wallet',
            icon: 'flight-takeoff',
            date: "23 Jan 2022"
        },

    ]

        
    
   const handleClick=()=>{
        dispatch(setroutes(routes.WC))
        console.log(routes.WC)
       navigator.navigate(routes.SCAN_QR)
   }

   useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
    
        
         navigation.navigate(routes.SETTINGS)
         return true
       };
    
     
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );


    return (

        <ScrollView style={styles.scrollView}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            <View style={styles.container}>
            <Loader loading={connecting}/>


                <View style={styles.info}>
                    <StyleText style={{ fontWeight: "bold" }}>
                        <MyAppText>
                            Wallet connect allows you to connect the JASIRI Wallet to JASIRI Web App for asset tokenization. please scan the QR code on the web app to continue
                        </MyAppText>
                    </StyleText>

                </View>



                <NormalButton title='Scan QR code' clickHandler={handleClick} style={styles.button} />
                <View style={styles.container2}>
                    <StyleText style={{ fontWeight: "bold" }}>
                        <MyAppText> Connected Dapps</MyAppText>
                    </StyleText>


                    {connections && (

                        <Box minW="96" borderWidth="1" borderColor="#F2EDED" bg="#F2EDED" p="5" rounded="8">
                            <HStack alignItems="center">
                                <HStack alignItems="flex-start" space={2}>
                                    <Avatar rounded source={require('../assets/Vector(6).png')} />

                                    <StyleText style={{ fontWeight: "bold" }}>
                                        <MyAppText>Jasiri wallet</MyAppText>
                                    </StyleText>
                                </HStack>

                                <Spacer />
                                <Icon
                                    name='more-horiz'
                                    type='material'
                                    color='#45AC99'
                                />

                            </HStack>
                            <VStack space={2} alignItems="flex-start" ml="10">
                                <Text fontWeight="medium" fontSize="xl" style={styles.listLink}>Connected with {connections}
                                </Text>
                                <Text mt="2" fontSize="sm" color="coolGray.700">
                                    {new Date().toDateString()}
                                </Text>
                            </VStack>
                        </Box>
                    )}
                    {connecting && <Text> loading</Text>}

                </View>



            </View>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F2EDED',
    },

    button: {
        height: 40,
        width: '40%',
        borderRadius: 10,
        margin: '10%',
        paddingRight: 10,
        paddingLeft: 10,
    },


    container: {
        // flex: 1,
        alignItems: 'center',
        minHeight: 800,
        // borderWidth: 1
    },
    container2: {
        // borderWidth: 2,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30,
        fontWeight: 'bold'
    },
    balance: {
        backgroundColor: '#fff',
        minHeight: '10%',
        margin: 5,
        width: '85%',
        borderRadius: 20,
        padding: 20
    },

    info: {
        backgroundColor: '#fff',
        // minHeight: '20%',
        margin: 10,
        width: '85%',
        borderRadius: 20,
        padding: 20
    },

    quickActions: {
        // backgroundColor: '#fff',
        // minHeight: '20%',
        margin: 10,
        width: '85%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    quickActionsItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 60,
        borderRadius: 10
    },
    tinyText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    listItem: {
        backgroundColor: '#F2EDED',
    },
    listLink: {
        color: '#45AC99',
    }
})

