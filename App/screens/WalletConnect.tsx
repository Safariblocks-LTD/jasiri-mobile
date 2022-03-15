import * as React from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler'

// import { accountInfo as getAccountInfo } from '../../services'
// import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { NormalButton } from '../components/common';
import { useNavigation } from '@react-navigation/native';
import WalletConnectClient from '@walletconnect/client';
import { RootState, setErrorMessage, setSuccessMessage } from '../redux';




export const WalletConnectComponent = () => {
   
    const uri = useSelector((state: RootState)=>state.scanned.data)
    const address = useSelector((state: RootState)=>state.newAccount.address)
    const dispatch = useDispatch()
    const navigator = useNavigation()
    const [connections, setConnections] = React.useState<string>()
    const [connecting, setConnecting] = React.useState<boolean>()
    
    React.useEffect(()=>{
           uri && (()=>{
               const client = new WalletConnectClient({
                uri: uri,
            
                clientMeta: {
                description: "WalletConnect Developer App",
                url: "https://walletconnect.org",
                icons: ["https://walletconnect.org/walletconnect-logo.png"],
                name: "WalletConnect",
                },
                // storageOptions: {
                //   asyncStorage: AsyncStorage,
                // },
                
            });

            client.on("session_request", (error, payload) => {
                setConnecting(true);
                if (error) {
                    dispatch(setErrorMessage(error.message))
                    setConnecting(false);
                    navigator.navigate('Error')
                    return
                }else{
                    console.log('success session_request')
                    console.log(payload)
    
                    client.approveSession({
                    accounts: [address], chainId: 1,
                    })
                    // stop connecting indicator
                    setConnecting(false);
                    setConnections(payload.id)
                    dispatch(setSuccessMessage('successfully connected'))
                    // navigation.navigate('Success')
                }

              
                
            })

            

            client.on("call_request", (error, payload) => {
                if (error) {
                    dispatch(setErrorMessage(error.message))
                    navigator.navigate('Error')
                }
                console.log(payload)
                console.log('success call_request')
                Alert.alert(JSON.stringify(payload))

            });

            
            client.on("disconnect", (error, payload) => {
                if (error) {
                    dispatch(setErrorMessage(error.message))
                    navigator.navigate('Error')
                }

                console.log(payload)
                setConnections(null)
                console.log('success disconnect')
                Alert.alert('wallet disconnected')
            });

            console.log(client.session.connected)

            !client.session.connected && client.createSession()

            // console.log(client.session, client.approve({}))
            
        })();
    }, [uri])

    React.useEffect(()=>{
        console.log(connections)
        console.log(connecting)
    })
        
    
   const handleClick=()=>{
       navigator.navigate('Scan QR')
   }

    return (
        
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            
            

            <View style={styles.info}> 
                <Text>
                Wallet connect allows you to connect the JASIRI Wallet to JASIRI Web App for asset tokenization. please scan the QR code on the web app to continue
                </Text>
            </View>

               
               
            <NormalButton title='Scan QR code' clickHandler={handleClick} style={styles.button}/>
            <View style={styles.container2}>
            <Text> Connected Dapps</Text> 
            {connections && (
                <View>
                    <Text> Jasiri wallet </Text>
                    <Text>Connected with {connections} </Text> 
                    <Text> {new Date().toDateString()} </Text>
                </View>
                    
            )}
            {connecting && <Text> loading</Text> }
            
            </View>
           
               
            </View>
            

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    scrollView: {
       flex: 1,
       padding: 10
    },

    button: {
        height:40,
        width: '40%',
        borderRadius: 20,
        margin: '10%'
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
        minHeight: '20%',
        margin: 10,
        width: '85%',
        borderRadius: 20
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
    tinyText:{
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    }
})
