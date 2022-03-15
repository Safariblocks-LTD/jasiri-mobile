import { useFocusEffect, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { View, StyleSheet, Image, Text, BackHandler } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

// let mn = 'dwarf jar wild economy unit subway pottery panic genuine science cabin spell drift toast settle skin business outside note rebel clay wool empower absent merry'


export const Success = () => {
    
    const message = useSelector((state: RootState)=>state.success.message)
    // console.log(error)

    const back = useSelector((state: RootState)=>state.routes.back)
    // console.log(error)

    const navigation= useNavigation()

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
      
          
           navigation.navigate(back)
           return true
         };
      
       
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [])
    );


    return (
        <View style={styles.container} >
          <View style={styles.scontainer}>
          <Image style={styles.image} source={require('../../assets/success.png')} />
          
          </View>
          <Text>{message}</Text>
         
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
scontainer: {
  backgroundColor: 'green',
  padding: 30,
  borderRadius: 100
},

image: {
    width: 150, 
    height: 150
  },
})
