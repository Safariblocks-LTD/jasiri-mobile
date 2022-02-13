import * as React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { RootState, setToken } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'

import { accountInfo as getAccountInfo} from '../../services'
import { Asset } from '../../types'




export const Transact = ({navigation}) => {
    const [assets, setAssets] = React.useState<Array<Asset>>([])
    
   
    const dispatch = useDispatch()

    const address = useSelector((state: RootState)=>state.newAccount.address)
    const [accountInfo, setAccountInfo] = React.useState(null)
    
    React.useEffect(()=>{
        (async()=> {
        const account = await getAccountInfo(address)
        setAssets(account.assets)
        // console.log(address)
        console.log(account)
        })();
        

    }, [])
    

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
                        assets && assets.length > 0 && assets.map((asset: Asset)=>
                            <View style={styles.tokensContainer} key={Math.random()}>
                            <View style={styles.tokenContainer} >
                                <TouchableOpacity 
                                    onPress={() => handleCLick(asset)}  
                                    >
                                   
                                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', }}>
                                            <Image style={{margin: 5}} source={require('../../assets/Vector(6).png')} />
                                            <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase', margin: 5}}> {asset.unitName} </Text>
                                        </View>
                                        
                                        <Text style={styles.unitAmount}>
                                                {asset.amount} {asset.unitName}
                                        </Text>
                                        <Text style={styles.unitInUsd}>$ ### USD</Text>
                                       
                                    
                                </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                         )
                         ||

                         <View style={styles.tokensContainer}>
                        <Text> No assets found</Text>
                       <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>handleCLickReceive()}
                        >
                           <Text>Recieve</Text>
                           </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    },

tokensContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
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


