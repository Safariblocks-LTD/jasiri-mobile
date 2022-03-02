import * as React from 'react'
import { View, StyleSheet, Image, Text, GestureResponderEvent } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

// let mn = 'dwarf jar wild economy unit subway pottery panic genuine science cabin spell drift toast settle skin business outside note rebel clay wool empower absent merry'


export const AssetButton = (props: {element: any, clickHandler: any, style: object}) => {
    
    

    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.clickHandler} > 
            {props.element}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
container: {
    // flex: 1,
    // height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#79E7E7'
},

})
