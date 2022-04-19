import * as React from 'react'
import { View, ScrollView, Image, BackHandler, RefreshControl, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

import { accountInfo as getAccountInfo, assetInfo, exchangeRate } from '../../services'
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { StyleText, MyAppText, textStyles } from '../../components/common/appTexts';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import Loader from '../../components/loading';
import { setAccountInfo, setAssets, setErrorMessage, setExchangeRate, setroutes } from '../../redux';




export const Dashboard = () => {
    const [refreshing, setRefreshing] = React.useState<boolean>(false)
    const address = useSelector((state: RootState) => state.newAccount.address)
    const accountInfo = useSelector((state: RootState) => state.accountInfo.info)
    const [loading, setLoading] = React.useState<boolean>()
    const assets = useSelector((state: RootState) => state.assetInfo.assets)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    //    const exchangeRates = useSelector((state: RootState)=>state.exchangeRate.exchangeRates)

    const onRefresh = () => {
        setRefreshing(true)
        setLoading(true);
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
            const account = await getAccountInfo({ address: address, name: 'getAccountInfo' })
            if (account.errored) {
                setLoading(false)
                dispatch(setErrorMessage(account.data))
                dispatch(setroutes(routes.DASHBOARD))
                navigation.navigate(routes.ERROR)
                return

            }


            dispatch(setAccountInfo(account))



            const assets = account.assets
            const assetsdata = assets.map(async (asset) => {
                const res = await assetInfo({ name: 'assetInfo', asset: asset['asset-id'] })

                return { ...res.assets[0], amount: asset.amount }
            })

            const assetsData = await Promise.all(assetsdata)



            if (assets.length < 1) {
                dispatch(setAssets([]))

                // dispatch(setAssets(assetsData))
                setRefreshing(false)
                setLoading(false);
                return
            }

            const res = await exchangeRate({ name: 'exchangeRates' })
            // console.log(res)           
            const JSR = assetsData.find(asset => asset.params.name === 'JASIRI')
            // console.log(JSR.amount)
            const jsrusdc = res.find(pair => pair.pair === 'JSR/USDC')
            const usdckes = res.find(pair => pair.pair === 'USD/KES')
            console.log(usdckes)
            const updatedAssets = assetsData.length && assetsData.map((asset) => {

                if (asset.params.name === 'JASIRI') {
                    return {
                        ...asset,
                        usdc: ((jsrusdc.value) * (asset.amount / 10000)).toFixed(2),
                        kes: (((jsrusdc.value) * (asset.amount / 10000)) * usdckes.value).toFixed(2)
                    }
                }
                return asset

            })



            dispatch(setAssets(updatedAssets))

            // dispatch(setAssets(assetsData))


            setRefreshing(false)
            setLoading(false);
        })();


    }, [address, refreshing])

console.log(assets)

    return (

        <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <Loader loading={loading} />
            <View style={styles.container}>

                <StyleText style={{ fontWeight: "bold" }}>


                    <View style={styles.balance}>
                        <MyAppText style={styles.balanceText}>TOTAL BALANCE</MyAppText>
                        {/* <MyAppText style={styles.balanceText}>ALGOs: {accountInfo ? accountInfo.amount / 1000000 : 'loading'}</MyAppText> */}
                        {assets.length > 0 && assets.map(asset => <View key={Math.random()}>
                            
                            

                            {asset.params.name === 'JASIRI' &&

                                <>
                                <MyAppText key={Math.random()} style={styles.balanceText}>{asset.params.name} : {asset.amount / 10000}</MyAppText>
                                    <MyAppText key={Math.random()} style={styles.balanceText}>KES : {asset.kes || 0}</MyAppText>
                                    {/* <MyAppText key={Math.random()} style={styles.balanceText}>USD : {asset.usdc || 0}</MyAppText> */}
                                </>
                            }
                        </View>
                        )}




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
                            source={require('../../assets/tokenization.png')}
                        />
                        <MyAppText style={styles.tinyText}> Tokenization </MyAppText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Agent")}
                        style={styles.quickActionsItem}>
                        <Image
                            // style={styles.tinyLogo}
                            source={require('../../assets/agent.png')}
                        />
                        <MyAppText style={styles.tinyText}> Agent </MyAppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickActionsItem}>
                        <Image
                            // style={styles.tinyLogo}
                            source={require('../../assets/rewards.png')}
                        />
                        <MyAppText style={styles.tinyText}> Rewards </MyAppText>
                    </TouchableOpacity>

                </View>
            </View>


        </ScrollView>

    )
}

