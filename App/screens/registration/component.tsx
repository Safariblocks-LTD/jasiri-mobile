import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export const Registration = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textbox}>
                <Text style={styles.text}>Welcome to the Jasiri wallet</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.up}>
                <Text style={styles.icon1}><MaterialIcons name="person-add-alt-1" size={30} color="black" /></Text> 
                <Text style={styles.iconText}>Create Account</Text>
                <Text style={styles.icon2}><Feather name="arrow-right-circle" size={24} color="black" /></Text>
                </View>
                <View style={styles.divider}></View>
                <View style = {styles.down}>
                <Text><MaterialIcons name="person-add-alt-1" size={30} color="black" /></Text> 
                <Text>Create Account</Text>
                <Text><Feather name="arrow-right-circle" size={24} color="black" /></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#FFFFFF'
    },
   textbox: {
   top: 41,
   width: 216,
   left: 60,
   alignItems: 'center',
   justifyContent: 'center',
   },
   text: {
   fontStyle: 'normal',
//    fontFamily: 'roboto',
   fontSize: 30,
   fontWeight: 'bold',
   },
   main: {
       top: 259,
       width: 'auto',
       alignItems: 'center',
       justifyContent: 'center',
   },
   up: {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   },
   icon1: {
   marginRight: 20,
   },
   iconText: {
    marginRight: 120
   },
  icon2: {

  },
   divider: {
       top: 12,
       width: 200,
       height: 2,
       backgroundColor: 'green',
   },
   down: {

   }
})


