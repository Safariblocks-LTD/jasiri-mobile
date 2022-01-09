import * as React from 'react'
import { View, Text } from 'react-native'
import { BottomNavigation } from '../../navigation/Index'
import { StyleSheet } from 'react-native'

export const Dashboard = () => {
    return (
        <View style={styles.container}>
            <BottomNavigation ></BottomNavigation>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

