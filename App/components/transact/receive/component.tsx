import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as React from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import routes from '../../../navigation/routes';


import QrGenerator from '../../qr-generator'


export const Receive = () => {
    const navigation=useNavigation()
    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
        
            
             navigation.navigate(routes.TOKEN)
             return true
           };
        
         
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );
    
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