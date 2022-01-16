import * as React from 'react'
import { View, Text, Image, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Modal } from 'react-native-paper';

 const Send = () => {
    return (
        <Modal>
            <View>
                <View>
                    <Text>TOTAL JASIRI BALANCE</Text>
                    <Text>0 J$R</Text>
                    <Text>$ 0.00 USD</Text>
                </View>
                <View>
                    <TouchableOpacity >
                        <Text>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Receive</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>transaction history</Text>
                    <Image source={require('../../../assets/icons8-menu-vertical.png')} />
                </View>
            </View>
        </Modal>
    )
}

export default Send


