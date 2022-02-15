import * as React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

// let mn = 'dwarf jar wild economy unit subway pottery panic genuine science cabin spell drift toast settle skin business outside note rebel clay wool empower absent merry'


export const Error = () => {
    
    const error = useSelector((state: RootState)=>state.error.message)
    // console.log(error)

    return (
        <View style={styles.container} >
          
          <Image style={styles.image} source={require('../../assets/error.png')} />
          <Text>{error}</Text>
         
        </View>
    )
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    height: '100%',
    width: '100%',
    // borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
},

image: {
    width: 150, 
    height: 150
  },
})
