import * as React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { accountInfo as getAccountInfo } from '../../services'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';





export const Dashboard = ({navigation}: any) => {
    const address = useSelector((state: RootState)=>state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)
    
    React.useEffect(()=>{
        (async()=> {
        const account = await getAccountInfo(address)
        console.log(account)
        })();
        

    })

    return (
        
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>

            <View style={styles.balance}> 
                <Text>TOTAL BALANCE</Text> 
                <Text>{accountInfo?accountInfo.account.assets[0].amount: 'loading'}</Text> 
                <Text>USD</Text> 
            </View>

            <View style={styles.info}> 

                </View>

                <Text style={{alignSelf: 'flex-start',...styles.title}}>Quick actions</Text>

                <View style={styles.quickActions}> 
                    <TouchableOpacity style={styles.quickActionsItem}>
                    <Image
                        // style={styles.tinyLogo}
                        source={require('../../assets/hand.png')}
                    />
                    <Text style={styles.tinyText}> Tokenization </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.quickActionsItem}>
                    <Image
                        // style={styles.tinyLogo}
                        source={require('../../assets/dollar.png')}
                    />
                    <Text style={styles.tinyText}> Cash commit </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.quickActionsItem}>
                    <Image
                        // style={styles.tinyLogo}
                        source={require('../../assets/pie.png')}
                    />
                    <Text style={styles.tinyText}> Rewards </Text>
                    </TouchableOpacity>

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
    
    container: {
        // flex: 1,
        alignItems: 'center',
        height: 800,
        // borderWidth: 1
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

