
import * as React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type navigation = {
    navigation: any
  }

export const Registration = ({navigation}: navigation) => {
    return (
    
        <View style={styles.container}>
            
            <View style={styles.content}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Welcome to the Jasiri wallet</Text>
                </View>

                <View style={styles.main}>
                    <View style={styles.up}>
                        <Text style={styles.icon1}><MaterialIcons name="person-add-alt-1" size={30} color="black" /></Text> 

                        <Text style={styles.iconText} onPress={() => navigation.navigate("Create Account")}>Create Account</Text>
                        <Text style={styles.icon2}><Feather onPress={() => navigation.navigate("Create Account")} name="arrow-right-circle" size={24} color="black" /></Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style = {styles.down}>
                        <Text style={styles.icon1}><MaterialCommunityIcons name="recycle" size={30} color="black" /></Text> 

                        <Text style={styles.iconText2} onPress={() => navigation.navigate("Recover Account")}>Recorver with passphrase</Text>

                        <Text style={styles.icon2}><Feather name="arrow-right-circle" size={24} color="black" /></Text>
                    </View>
                </View>

                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>
                        By creating an account, you agree to Jasiri terms and conditions and privacy policy
                    </Text>
                </View>
            </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1
    },

   textbox: {
   marginTop: 30,
   alignItems: 'center',
   width: '60%',
   justifyContent: 'center',
//    borderWidth: 1
   },

   text: {
   fontSize: 30,
   fontWeight: 'bold',
   },

   main: {
    //    borderWidth: 1,
       width: '100%',
       alignItems: 'flex-start',
       paddingLeft: 30,
       justifyContent: 'space-around',
       height: '30%'
   },

   up: {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   },

   icon1: {
   marginRight: 30,
   },

   iconText: {
    marginRight: 120
   },
   iconText2: {
    marginRight: 60
   },

  icon2: {

  },

   divider: {
       marginLeft: 60,
       width: '68%',
       borderWidth: 1,
       backgroundColor: 'black',
   },
   down: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
   },

   footer: {
    //    borderWidth: 1,
       marginBottom: 30,
       width: '100%',
       padding: 15,
       alignItems: 'center',
       justifyContent: 'center'
   },

   footerText: {
   color: 'black',
   alignItems: 'flex-end',
   fontWeight: 'normal',
   fontStyle: 'normal',
   fontSize: 17,
   }
})


