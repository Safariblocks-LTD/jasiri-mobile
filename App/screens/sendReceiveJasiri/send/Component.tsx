import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export const Send = () => {
    return (
        // <ScrollView style={{flex: 1,}}>
            <View style={styles.container} >
                <View style={styles.content}>
                    <View style={styles.content_first} >
                        <View style={styles.content_first_jasiri} >
                            <TouchableOpacity >
                                <View style={styles.first}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
                                        <Image source={require('../../../assets/Vector(6).png')} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase'}}>Ja$iri</Text>
                                    </View>
                                    <View style={{display: 'flex', flexDirection: 'column', marginLeft: 30, padding: 5}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>0 JSR</Text>
                                        <Text style={{backgroundColor: '#B7FFEA', borderRadius: 10, width: '30%', fontSize: 14, fontWeight: 'bold'}}>$ 9000.00SD</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content_first_usd} >
                            <TouchableOpacity>
                                <View style={styles.first}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
                                        <Image source={require('../../../assets/icons8-tether.png')} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase'}}>USD</Text>
                                    </View>
                                    <View style={{display: 'flex', flexDirection: 'column', marginLeft: 30, padding: 5}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>0 USDC</Text>
                                        <Text style={{backgroundColor: '#B7FFEA', borderRadius: 10, width: '30%', fontSize: 14, fontWeight: 'bold'}}>$ 9000.00SD</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content_first_algo} >
                            <TouchableOpacity>
                                <View style={{marginLeft: 45, display: 'flex', flexDirection: 'column'}}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase'}}>ALGO</Text>
                                    </View>
                                    <View  style={{display: 'flex', flexDirection: 'column', marginTop: 5}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>0 ALGO</Text>
                                        <Text style={{backgroundColor: '#B7FFEA', borderRadius: 10, width: '30%', fontSize: 14, fontWeight: 'bold'}}>$ 9000.00SD</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
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
            </View>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
container: {
       
    backgroundColor: '#E3E8E7',
    },
content: {
    // borderWidth: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
},
content_first: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: '100%',
    height: '60%'
},
content_first_jasiri: {
    // borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    height: 'auto',
    paddingBottom: 10,
    margin: 20,
    backgroundColor: 'white'
},
first: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10
},
content_first_usd: {
    // borderWidth: 1,
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingBottom: 10,
    margin: 20,
},
content_first_algo: {
    // borderWidth: 1,
    width: '90%',
    height: 'auto',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingBottom: 10,
    // margin: 20,
},
content_second: {
    // borderWidth: 1,
    width: '100%',
    height: '40%',
    justifyContent: 'flex-start',
    paddingTop: 80,
    alignItems: 'center'

},
account: {
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    padding: 10,
    width: '100%',
    height: 42,
    borderRadius: 15,
  },
})

