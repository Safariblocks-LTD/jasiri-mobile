import * as React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn, setAddress } from '../../redux'
import { recoverAccount } from '../../services'
import AsyncStorage from '@react-native-async-storage/async-storage';

// let mn = 'dwarf jar wild economy unit subway pottery panic genuine science cabin spell drift toast settle skin business outside note rebel clay wool empower absent merry'


export const Loading = () => {
    

    return (
        
            <Text>Loading....</Text>

    )
}


const styles = StyleSheet.create({

})
