import * as React from 'react'
import { View, Text, Image, StyleSheet, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RootState, setAccountInfo, setActiveAsset, setActiveAssets, setAssets, setroutes, setToken } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'

import { accountInfo as getAccountInfo, assetInfo, optIn } from '../../services'
import { Asset } from '../../types'
import { setErrorMessage } from '../../redux'

import { useNavigation } from '@react-navigation/native'
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
                    <Text style={styles.unitname}> {asset.params.name} </Text>
                </View>

                <Text style={styles.unitAmount}>
                    {asset.amount/10000} {asset.params.name}
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
    
    const [loading, setLoading] = React.useState<boolean>()

    const [added, setAdded] = React.useState<boolean>()

    const mnemonic = useSelector((state: RootState) => state.newAccount.mnemonic)
    const dispatch = useDispatch()

    

    const [refreshing, setRefreshing] = React.useState<boolean>(false)
    const assets = useSelector((state: RootState)=>state.assetInfo.assets)
    

    const onRefresh=()=>{
        setRefreshing(true)
        setLoading(true)
    }


    const navigation = useNavigation()

    
    const handleCLickAddJasiri = () => {
        console.log('add jasiri')
        const assetId = 67513364;
      

        (async()=>{
            setLoading(true);
            const response = await optIn({name: 'optIn', mnemonic, assetId})

            if(response.errored){
                console.log(response)
                dispatch(setErrorMessage(response.data))
                dispatch(setroutes(routes.TRANSACT))
                navigation.navigate(routes.ERROR)
                setLoading(false);
                return 
               
                
            }

            const res = response
            // setAdded(true)

            dispatch(setAccountInfo(res))
            
            console.log(res)
            const assets = res.assets
            const assetsdata = assets.map(async (asset)=> {
                const res = await assetInfo({name: 'assetInfo', asset: asset['asset-id']})
               
                return {...res.assets[0], amount: asset.amount }
            })

            const assetsData = await Promise.all(assetsdata)

           

            // setAssets(assetsData)

            dispatch(setAssets(assetsData))

            // dispatch(setroutes(routes.TRANSACT))
            // navigation.navigate(routes.T)
            setLoading(false);
        })()


    }

   

    const handleCLickReceive = () => {
        console.log('button click')
        dispatch(setroutes(routes.TRANSACT))
        navigation.navigate(routes.RECIEVE_TOKEN)
    }


    const handleCLick=(asset: Asset)=>{
        setLoading(true)
        dispatch(setActiveAsset(asset))
        setLoading(false)
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
                                <AssetButton element={<AssetInfo asset={asset} />} style={styles.assetButton} clickHandler={()=>handleCLick(asset)} />
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








