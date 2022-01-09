import * as React from 'react'
import { View, Text } from 'react-native'
import { BottomNavigation } from '../../navigation/Index'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const DashboardHome = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>Dashboard</Text>

           <View style={styles.balance}> 

           </View>

           <View style={styles.info}> 

            </View>

            <Text style={styles.title}>Quick actions</Text>

            <View style={styles.quickActions}> 

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold'
    },
    balance: {
        backgroundColor: '#fff',
        minHeight: '20%',
        margin: 5,
        width: '85%',
        borderRadius: 20
    },

    info: {
        backgroundColor: '#fff',
        minHeight: '40%',
        margin: 10,
        width: '85%',
        borderRadius: 20
    },

    quickActions: {
        backgroundColor: '#fff',
        minHeight: '20%',
        margin: 10,
        width: '85%',
        borderRadius: 20
    }
})

