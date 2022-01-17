import * as React from 'react'
import { View, Text } from 'react-native';

import QrGenerator from './qr-generator'


const Receive = () => {
    return (
        <View>
            <Text>
                Receive jasiri
            </Text>
            <QrGenerator/>
        </View>
    )
}

export default Receive
