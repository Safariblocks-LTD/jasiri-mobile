<<<<<<< HEAD
=======
import * as React from 'react'
import { View, Text } from 'react-native'
>>>>>>> 05ed0d1 (added a new file and modified other files)

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

