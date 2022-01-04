
import * as React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { BottomNavigation } from '../../navigation/Index'
import { StyleSheet } from 'react-native'
export const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BottomNavigation ></BottomNavigation>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

