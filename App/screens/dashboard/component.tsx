
import * as React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { BottomNavigation } from '../../navigation'
import { StyleSheet } from 'react-native'

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BottomNavigation ></BottomNavigation>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

