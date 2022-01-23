import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { setToken, setVisible } from '../../redux'
import { useDispatch } from 'react-redux'

import { accountInfo,  getAccountInfo, getAssetInfo} from '../../services'
import { Asset } from '../../types'

const accountAddr = 'DQRHSRZMBFJ6P6SFE54XOTHEDRZOFXHE6LQT3YHAIWKKRYFPAYIGOCE6AY'


export const Transact = ({navigation}) => {
    const [assets, setAssets] = React.useState<Array<Asset>>([])
    
   
    const dispatch = useDispatch()

    React.useEffect(()=>{    
        (async()=>{
            console.log('loading')
            const accInfo = await accountInfo(accountAddr)
        
            const assets = accInfo.assets

            const au = assets.map(async(asset: Asset)=>{
            const assetInfo = await getAssetInfo(asset['asset-id'])
            const unitName = assetInfo.asset.params['unit-name']
            return {...asset, unitName}            
            })

           const assetsWithName = await Promise.all(au)

           setAssets(assetsWithName)
      

    })()
        
    // })
    }, [])

    const handleCLick=(asset: Asset)=>{
       
        console.log(asset)
        
        dispatch(setToken(asset))
        navigation.navigate('Token')
        
    }
    return (
            <ScrollView style={styles.container} >
                <View style={styles.content}>
                    {
                        assets.length > 0 ? assets.map((asset: Asset)=>
                            <View style={styles.tokensContainer} key={asset.unitName}>
                            <View style={styles.tokenContainer} >
                                <TouchableOpacity 
                                    onPress={() => handleCLick(asset)}  
                                    >
                                   
                                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
                                            <Image style={{margin: 5}} source={require('../../assets/Vector(6).png')} />
                                            <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase', margin: 5}}>Ja$iri</Text>
                                        </View>
                                        
                                        <Text style={styles.unitAmount}>
                                                {asset.amount} {asset.unitName}
                                        </Text>
                                        <Text style={styles.unitInUsd}>$ 0 USD</Text>
                                       
                                    
                                </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                         ):
                         <View style={styles.tokensContainer} key={''}>
                         <View style={styles.tokenContainer} >                           
                                
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
                                <Image style={{margin: 5}} source={require('../../assets/Vector(6).png')} />
                                <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase', margin: 5}}>loading</Text>
                            </View>
                            
                            <Text style={styles.unitAmount}>
                                    loading
                            </Text>
                            <Text style={styles.unitInUsd}>$ 0 USD</Text>
                        
                                 
                     
                         </View>
                         
                         
                     </View>
                     }
                  
                    
                        <TouchableOpacity 
                          style={styles.button}
                        >
                            <Text style={styles.account}>
                                Tap to add token
                            </Text>
                        </TouchableOpacity>
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
    backgroundColor: '#E3E8E7',
    height: 800,

    },
content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 800,

},
tokensContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
},
tokenContainer: {
    borderRadius: 5,
    width: '90%',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
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


