import * as React from 'react'
import { View, Text, ScrollView, Image, BackHandler, RefreshControl } from 'react-native'
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';





export const Dashboard = () => {
    const [refreshing, setRefreshing] = React.useState<boolean>(false)
    const address = useSelector((state: RootState) => state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)
    
    const navigation=useNavigation()

    const onRefresh=()=>{
        setRefreshing(true)
    }

    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
        
            
             BackHandler.exitApp()
             return true
           };
        
         
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );
    

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
            setRefreshing(false)

        })();


    }, [address, refreshing])

    return (

        <ScrollView style={styles.scrollView}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            <View style={styles.container}>

                <StyleText style={{ fontWeight: "bold" }}>
                    


            <View style={styles.balance}> 
                <MyAppText style={styles.balanceText}>TOTAL BALANCE</MyAppText>
                <MyAppText style={styles.balanceText}>Algo: {accountInfo?accountInfo.amount: 'loading'}</MyAppText> 
                {(accountInfo && accountInfo.assets) ?accountInfo.assets.map(asset=>
                <MyAppText key={Math.random()} style={styles.balanceText}>JSR : {asset.amount}</MyAppText>): <></>} 
                <MyAppText style={styles.balanceText}>USD</MyAppText> 
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

