import * as React from 'react'
import { View, Text, Image, StyleSheet, Button, BackHandler, RefreshControl } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { RootState, setroutes, setToken } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'

import { accountInfo as getAccountInfo, assetInfo, optIn } from '../../services'
import { Asset } from '../../types'
import { setErrorMessage } from '../../redux'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AssetButton, NormalButton } from '../../components/common'

import { Badge, VStack, Center } from 'native-base';
import { styles } from "./styles";
import Loader from '../../components/loading'

import routes from '../../navigation/routes'


const AssetInfo = ({ asset }) => {
    return (
        <>
            <View style={assetInfoStyles.assetinfo}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                    <Image style={{ margin: 5 }} source={require('../../assets/Vector(6).png')} />
                    <Text style={styles.unitname}> {asset.unitName} </Text>
                </View>

                <Text style={styles.unitAmount}>
                    {asset.amount} {asset.unitName}
                </Text>
                <Text style={styles.unitInUsd}>$ ### USD</Text>
            </View>
        </>
    )
}

const assetInfoStyles = StyleSheet.create({
    assetinfo: {
        justifyContent: 'flex-start',
        width: '100%'
    }
})




export const Transact = () => {
    const [assets, setAssets] = React.useState<Array<Asset>>([])
    const [loading, setLoading] = React.useState<boolean>()

    const [added, setAdded] = React.useState<boolean>()

    const mnemonic = useSelector((state: RootState) => state.newAccount.mnemonic)
    const dispatch = useDispatch()

    const address = useSelector((state: RootState) => state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)

    const [refreshing, setRefreshing] = React.useState<boolean>(false)
    

    const onRefresh=()=>{
        setRefreshing(true)
        setLoading(true)
    }


    const navigation = useNavigation()

    React.useEffect(()=>{
        (async()=> {
        const account = await getAccountInfo(address)
        console.log(account.assets[0])
        if(account.error){
            dispatch(setErrorMessage(`${account.error}`))
            navigation.navigate(routes.ERROR)
        }

        const assets: Partial<Asset[]> = account.assets
        
        setAssets(assets)
        dispatch(setToken({amount: assets[0].amount, unitName:'JASIRI'}))
        // await assetInfo(account.assets[0].id)
            setRefreshing(false)
            setLoading(false)
        

        })();



    }, [refreshing, address])

    const handleCLickAddJasiri = () => {
        console.log('add jasiri')
        const assetId = 67513364;
        setLoading(true);


        (async()=>{
            const res = await optIn(mnemonic,assetId)
            if(res.error){
                navigation.navigate(routes.ERROR)

                console.log(res.error)
                dispatch(setErrorMessage(res.error))
            }
            setAdded(true)
            console.log(res)
            setLoading(false);
        })()


    }

   

    const handleCLickReceive = () => {
        console.log('button click')
        dispatch(setroutes(routes.TRANSACT))
        navigation.navigate(routes.RECIEVE_TOKEN)
    }


    const handleCLick=(asset: Asset)=>{
        navigation.navigate(routes.SEND_RECIEVE_SCREEN)

    }

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <Loader loading={loading}/>
            <View style={styles.container}>
                {
                    assets && assets?.length > 0 && assets.map((asset: Asset) =>
                        <View style={styles.tokensContainer} key={Math.random()}>
                            <View style={styles.tokenContainer} >
                                <AssetButton element={<AssetInfo asset={{ ...asset, unitName: 'JASIRI' }} />} style={styles.assetButton} clickHandler={handleCLick} />
                            </View>


                        </View>
                    )
                    ||

                    <>
                        {/* <Text> No assets found</Text> */}
                        <VStack space={2} alignItems="center">
                            <Badge colorScheme="success" variant={"outline"}>No assets found</Badge>

                            <Center>  <NormalButton
                                title='Receive'
                                style={styles.button}
                                clickHandler={handleCLickReceive}
                            />
                            </Center>
                        </VStack>



                        
                    </>


                }


                {!assets || assets?.length === 0 &&
                 <VStack space={2} alignItems="center">
                            <Center>
                              <NormalButton
                    style={styles.button}
                    clickHandler={() => handleCLickAddJasiri()}
                    title='Tap to add JASIRI'
                />
                            </Center>
                            </VStack>
              
                }
            </View>

        </ScrollView>
    )
}








