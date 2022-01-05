<<<<<<< HEAD

=======
>>>>>>> 83aed74 (modified some files)
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
<<<<<<< HEAD
=======

>>>>>>> 8e30ceb (added changes in the authentication pages)

<<<<<<< HEAD
type navigation = {
    navigation: any
  }

export const Registration = ({navigation}: navigation) => {
=======
export const Registration = ({navigation}) => {
>>>>>>> 0367ad5 (created account recovery page)
    return (
        <View style={styles.container}>
            <View style={styles.textbox}>
                <Text style={styles.text}>Welcome to the Jasiri wallet</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.up}>
                <Text style={styles.icon1}><MaterialIcons name="person-add-alt-1" size={30} color="black" /></Text> 
<<<<<<< HEAD

=======
>>>>>>> 0367ad5 (created account recovery page)
                <Text style={styles.iconText} onPress={() => navigation.navigate("Create Account")}>Create Account</Text>
                <Text style={styles.icon2}><Feather onPress={() => navigation.navigate("Create Account")} name="arrow-right-circle" size={24} color="black" /></Text>
                </View>
                <View style={styles.divider}></View>
                <View style = {styles.down}>
                <Text style={styles.icon1}><MaterialCommunityIcons name="recycle" size={30} color="black" /></Text> 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Text style={styles.iconText2} onPress={() => navigation.navigate("Recover Account")}>Recorver with passphrase</Text>
=======
                <Text style={styles.iconText}>Create Account</Text>
>>>>>>> 8e30ceb (added changes in the authentication pages)
=======
                <Text style={styles.iconText2}>Recorver with passphrase</Text>
>>>>>>> fd15565 (modified the registration and home files)
=======
                <Text style={styles.iconText2} onPress={() => navigation.navigate("Recover Account")}>Recorver with passphrase</Text>
>>>>>>> 0367ad5 (created account recovery page)
                <Text style={styles.icon2}><Feather name="arrow-right-circle" size={24} color="black" /></Text>
                </View>
            </View>
            <View style = {styles.footer}>
                <Text style = {styles.footerText}>
                    By creating an account, you agree to Jasiri terms and conditions and privacy policy
                </Text>
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
<<<<<<< HEAD
<<<<<<< HEAD
   iconText2: {
    marginRight: 60
   },
=======
>>>>>>> 8e30ceb (added changes in the authentication pages)
=======
   iconText2: {
    marginRight: 60
   },
>>>>>>> fd15565 (modified the registration and home files)

  icon2: {

  },

   divider: {
       left: 20,
<<<<<<< HEAD
<<<<<<< HEAD
       top: 25,
=======
       top: 10,
>>>>>>> 8e30ceb (added changes in the authentication pages)
=======
       top: 25,
>>>>>>> fd15565 (modified the registration and home files)
       width: 256,
       height: 2,
       backgroundColor: 'black',
   },
   down: {
<<<<<<< HEAD
<<<<<<< HEAD
       top: 45,
=======
       top: 20,
>>>>>>> 8e30ceb (added changes in the authentication pages)
=======
       top: 45,
>>>>>>> fd15565 (modified the registration and home files)
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
   },

   footer: {
       top: 441,
       width: 272,
       left: 55
   },

   footerText: {
   color: 'black',
   alignItems: 'flex-end',
   fontWeight: 'normal',
   fontStyle: 'normal',
   fontSize: 14,
   lineHeight: 16
   }
})


