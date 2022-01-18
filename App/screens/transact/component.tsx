import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { getAccountInfo, getAssetInfo } from '../../services'
import { setToken, setVisible } from '../../redux'
import { useDispatch } from 'react-redux'


export const Transact = () => {
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
        // navigation.navigate('Token')
        
    }
    return (
            <ScrollView style={styles.container} >
                <View style={styles.content}>
                    {
                        assets.length > 0 ? assets.map((asset: {amount: string, unit: string})=>
                            <View style={styles.content_first} key={unitName}>
                            <View style={styles.content_first_jasiri} >
                                <TouchableOpacity 
                                    onPress={() => handleCLick({amount: asset.amount})}  
                                    >
                                    <View style={styles.first}>
                                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
                                            <Image style={{margin: 5}} source={require('../../assets/Vector(6).png')} />
                                            <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase', margin: 5}}>Ja$iri</Text>
                                        </View>
                                        <View style={{flexDirection: 'column', marginLeft: 30, padding: 5}}>
                                            <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 5, padding: 4}}>
                                                {asset.amount} {unitName}
                                            </Text>
                                            <Text style={{backgroundColor: '#B7FFEA', borderRadius: 10, width: '30%', fontSize: 14, fontWeight: 'bold', padding: 4}}>$ 9000.00SD</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                         ):
                        <View style={styles.content_first} >
                            
                            <Text> Loading </Text>
                        </View>
                     }
                  
                    <View style={styles.content_second} >
                        <TouchableOpacity 
                          style={styles.button}
                        >
                            <Text style={styles.account}>
                                Tap to add token
                            </Text>
                        </TouchableOpacity>
                    </View>


                    
                </View>
            
           
            </ScrollView>
    )
}





const styles = StyleSheet.create({
container: {
    padding: 20,
    // flex: 1,
    backgroundColor: '#E3E8E7',
    height: 800,
    // borderWidth: 5
    },
content: {
    flex: 1,
    justifyContent: 'center',
    height: 800,
    // borderWidth: 5
},
content_first: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // height: '60%',
    // borderWidth: 5
},
content_first_jasiri: {
    borderRadius: 5,
    width: '90%',
    paddingBottom: 10,
    margin: 20,
    backgroundColor: 'white',
    // flex: 1,
},
first: {
    flexDirection: 'column',
    marginLeft: 10,
    // flex: 1,
},
content_first_usd: {
  
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,


},

content_second: {
    // borderWidth: 1,
    width: '100%',
    // height: '40%',
    justifyContent: 'flex-start',
    paddingTop: 80,
    alignItems: 'center'

},
account: {
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    padding: 15,
    width: '100%',
    // height: 42,
    borderRadius: 10,
  },
})


