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
import { StyleText, MyAppText, textStyles } from '../../components/common/appTexts';
import appStyles from '../../components/common/appStyles'




export const Dashboard = ({ navigation }: any) => {
    const address = useSelector((state: RootState) => state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)


    const styled = {
        heading: (scale) => {
            const fontSize = textStyles.fontSize * scale;

            return {
                lineHeight: fontSize * 1.4,
                marginBottom: 12,
                fontWeight: "500",
                fontSize
            };
        }
    }
    React.useEffect(() => {
        (async () => {
            const account = await getAccountInfo(address)

        setAccountInfo(account)

        })();


    }, [address])

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                <StyleText style={{ fontWeight: "bold" }}>
                    <MyAppText style={{ alignSelf: 'center' }}>Dashboard</MyAppText>


            <View style={styles.balance}> 
                <Text style={styles.balanceText}>TOTAL BALANCE</Text> 
                <Text style={styles.balanceText}>Algo: {accountInfo?accountInfo.amount: 'loading'}</Text> 
                {accountInfo?accountInfo.assets.map(asset=>
                <Text key={Math.random()} style={styles.balanceText}>JSR : {asset.amount}</Text>): <></>} 
                <Text style={styles.balanceText}>USD</Text> 
            </View>


                    <View style={styles.balance}>
                        <MyAppText>TOTAL BALANCE</MyAppText>
                        <MyAppText>{accountInfo ? accountInfo.account.assets[0].amount : '$0.00'}</MyAppText>
                        <MyAppText>USD</MyAppText>
                    </View>
                </StyleText>
                <View style={styles.info}>

                </View>
                <StyleText style={{ fontWeight: "bold" }}>
                    <MyAppText style={{ alignSelf: 'flex-start' }}>Quick actions</MyAppText>
                </StyleText>


                <View style={styles.quickActions}>
                    <TouchableOpacity style={styles.quickActionsItem}>
                        <Image
                            // style={styles.tinyLogo}
                            source={require('../../assets/hand.png')}
                        />
                        <MyAppText style={styles.tinyText}> Tokenization </MyAppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickActionsItem}>
                        <Image
                            // style={styles.tinyLogo}
                            source={require('../../assets/dollar.png')}
                        />
                        <MyAppText style={styles.tinyText}> Cash commit </MyAppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickActionsItem}>
                        <Image
                            // style={styles.tinyLogo}
                            source={require('../../assets/pie.png')}
                        />
                        <MyAppText style={styles.tinyText}> Rewards </MyAppText>
                    </TouchableOpacity>

                </View>
            </View>


        </ScrollView>

    )
}

