import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { getAccountInfo, getAssetInfo } from '../../services'
import { setToken, setVisible } from '../../redux'
import { useDispatch } from 'react-redux'


export const Transact = ({navigation}) => {
    const [assets, setAssets] = React.useState([])
    const [unitName, setUnitName] = React.useState('')
   
    const dispatch = useDispatch()

    React.useEffect(()=>{
        getAccountInfo().then(res=>{
           
            setAssets(res.account.assets)
            getAssetInfo().then((asset)=>{
            
            const assetParams = {...asset}.asset.params
            setUnitName(assetParams['unit-name'])
            
        // console.log(asset)
        })
    })
    }, [unitName])

    const handleCLick=(asset: {amount: string})=>{
        dispatch(setToken({unitName, amount: asset.amount}))
        
        dispatch(setVisible({visible: true}))
        navigation.navigate('Send or receive')
        
    }
    return (
            <ScrollView style={styles.container} >
                <View style={styles.content}>
                    {
                        assets.length > 0 ? assets.map((asset: {amount: string, unit: string})=>
                            <View style={styles.tokensContainer} key={unitName}>
                            <View style={styles.tokenContainer} >
                                <TouchableOpacity 
                                    onPress={() => handleCLick({amount: asset.amount})}  
                                    >
                                   
                                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
                                            <Image style={{margin: 5}} source={require('../../assets/Vector(6).png')} />
                                            <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase', margin: 5}}>Ja$iri</Text>
                                        </View>
                                        
                                        <Text style={styles.unitAmount}>
                                                {asset.amount} {unitName}
                                        </Text>
                                        <Text style={styles.unitInUsd}>$ 0 USD</Text>
                                       
                                    
                                </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                         ):
                        <View style={styles.tokensContainer} >
                            
                            <Text> Loading </Text>
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
    marginTop: 20,
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
    marginBottom: 50
},
tokenContainer: {
    borderRadius: 5,
    width: '90%',
    paddingBottom: 10,
    margin: 20,
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


