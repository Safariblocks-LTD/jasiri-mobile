import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import QrGenerator from './qr-generator'


export const Receive = () => {
    return (
        
        <ScrollView style={styles.receiveContainer}>
            <QrGenerator/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    receiveContainer: {
        paddingTop: 50,
        flex: 1,
        width: '100%',
        height: 800,
        // borderWidth: 5
    }
})