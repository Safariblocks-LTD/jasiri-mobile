import * as React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { RootState, setToken } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'

import { accountInfo as getAccountInfo, assetInfo, optIn} from '../../services'
import { Asset } from '../../types'
import { setErrorMessage } from '../../redux'
import { Loading } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { AssetButton, NormalButton } from '../../components/common'


const AssetInfo=({asset})=>{
    return (
        <>
        <View style={assetInfoStyles.assetinfo}>
       
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
            <Image style={{margin: 5}} source={require('../../assets/Vector(6).png')} />
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
    const [assets, setAssets] = React.useState<Array<Asset>>()
    const [loading, setLoading] = React.useState<boolean>()

    const [added, setAdded] = React.useState<boolean>()
    
    const mnemonic = useSelector((state: RootState)=>state.newAccount.mnemonic)
    const dispatch = useDispatch()

    const address = useSelector((state: RootState)=>state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)

    const navigation = useNavigation()
    
    React.useEffect(()=>{
        (async()=> {
        const account = await getAccountInfo(address)
        console.log(account.assets[0])
        if(account.error){
            dispatch(setErrorMessage(`${account.error}`))
            navigation.navigate('Error')
        }

        const assets: Partial<Asset[]> = account.assets
        
        setAssets(assets)
        dispatch(setToken({amount: assets[0].amount, unitName:'JASIRI'}))
        // await assetInfo(account.assets[0].id)
        
        })();
        
        

    }, [])

    const handleCLickAddJasiri=()=>{
        console.log('add jasiri')
        const assetId = 67513364;
        setLoading(true);
        (async()=>{
            const res = await optIn(mnemonic,assetId)
            if(res.error){
                navigation.navigate('Error')
                console.log(res.error)
                dispatch(setErrorMessage('error reading value'))
            }
            setAdded(true)
            console.log(res)
            setLoading(false);
        })()

        
    }
    

    const handleCLickReceive=()=>{
        console.log('button click')
        navigation.navigate('Receive')
    }
  

    const handleCLick=(asset: Asset)=>{
       
        console.log(asset)
        
        dispatch(setToken(asset))
        navigation.navigate('Token')
        
    }
    
    return (
            <ScrollView  >
                <View style={styles.container}>
                    {
                        assets && assets?.length> 0 &&  assets.map((asset: Asset)=>
                            <View style={styles.tokensContainer} key={Math.random()}>
                            <View style={styles.tokenContainer} >
                              <AssetButton element={<AssetInfo asset={{...asset, unitName:'JASIRI'}}/>} style={styles.assetButton} clickHandler={handleCLick}/>
                            </View>
                            
                            
                        </View>
                         )
                         ||

                         <>
                        <Text> No assets found</Text>
                       <NormalButton 
                       title='Recieve'
                        style={styles.button}
                        clickHandler={handleCLickReceive}
                        />
                           
                           {/* {loading && <Loading/>} */}
                           </>

                        
                     } 
                  
                    
                        {!assets || assets?.length===0 && <NormalButton 
                          style={styles.button}
                    clickHandler={() => handleCLickAddJasiri()}
                    title='Tap to add JASIRI'
                        />
                    }
                </View>
           
            </ScrollView>
    )
}





const styles = StyleSheet.create({
container: {
    padding: 20,
    flex: 1,
    paddingTop: 40,
    // marginTop: 20,
    // backgroundColor: '#E3E8E7',
    height: 800,
    justifyContent: 'flex-start',
    alignItems: 'center',
    },

unitname: { 
    fontWeight: 'bold', 
    fontSize: 17, 
    textTransform: 'uppercase', 
    margin: 5
},

tokensContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
},

assetButton: {
    alignContent: 'flex-start'
},

tokenContainer: {
    borderRadius: 5,
    width: '90%',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    // borderWidth: 5
},
unitAmount: {
    marginLeft: 40,
    fontWeight: 'bold'
}, 

unitInUsd: {
    marginLeft: 40,
    fontWeight: 'bold'
},
account: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    padding: 10,
    width: '60%',
    borderRadius: 10,
    alignSelf: 'flex-end'
  },
})


