import { FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'


export const TabBar =()=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <FontAwesome5 name="wallet" size={30} color="#028373" />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons name="contacts" size={30} color="#028373"  />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialIcons name="swap-vert-circle" size={55} color="#028373" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Octicons name="bell" size={30} color="#028373" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Fontisto name="player-settings" size={30} color="#028373" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth: 1
        padding: 5
    }
})