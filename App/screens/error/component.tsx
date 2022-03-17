import { useFocusEffect, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { View, StyleSheet, Image, Text, BackHandler } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState, routes } from '../../redux'

// let mn = 'dwarf jar wild economy unit subway pottery panic genuine science cabin spell drift toast settle skin business outside note rebel clay wool empower absent merry'


export const Error = () => {
    
    const error = useSelector((state: RootState)=>state.error.message)
    const back = useSelector((state: RootState)=>state.routes.back)
    console.log(back)

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
