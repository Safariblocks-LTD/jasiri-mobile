import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import QrGenerator from './qr-generator'


const Receive = () => {
    return (
        
        <View style={styles.receiveContainer}>
            <QrGenerator/>
        </View>
    )
}

export default Receive


const styles = StyleSheet.create({
    receiveContainer: {
  
        flex: 1,
        width: '100%',
        height: 800,
        // borderWidth: 5
    }
})