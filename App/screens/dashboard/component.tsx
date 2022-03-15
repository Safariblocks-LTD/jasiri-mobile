import * as React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { accountInfo as getAccountInfo } from '../../services'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { styles } from './styles';





export const Dashboard = ({navigation}: any) => {
    const address = useSelector((state: RootState)=>state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)
    
    React.useEffect(()=>{
        (async()=> {
        const account = await getAccountInfo(address)
        console.log(account)
        setAccountInfo(account)
        })();
        

    }, [address])

    return (
        
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>

            <View style={styles.balance}> 
                <Text>TOTAL BALANCE</Text> 
                <Text>Algo: {accountInfo?accountInfo.amount: 'loading'}</Text> 
                {accountInfo?accountInfo.assets.map(asset=>
                <Text key={Math.random()}>JSR : {asset.amount}</Text>): <></>} 
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



