import * as React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type navigation = {
    navigation: any
  }

export const SeedPhraseFinalPage = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <View style={styles.sectionOne}>
                    <Text style={styles.text}>Tap words in correct order to confirm your seed phrase</Text>
                </View>
                <View style={styles.sectionTwo}>
                    <Text style={styles.text}>Select word #2</Text>
                </View>
                <View style={styles.sectionThree}>
                   <Text style={styles.text}>Select word #2</Text>
                </View>
                <View style={styles.sectionThree}>
                   <Text style={styles.text}>Select word #2</Text>
                </View>
                <View style={styles.sectionThree}>
                  <Text style={styles.text}>Select word #2</Text>
                </View>
                <View style={styles.sectionFive}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}  >
                            <Text 
                            style = {styles.buttonText}   
                                                    
                            >
                            Next
                            </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: 'white'
 },
 content: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
 },
 sectionOne: {
     marginTop: 10,
     backgroundColor: '#B0DDD5',
     padding: 10,
     height: '10%',
     width: '80%',
     alignItems: 'center',
    borderRadius: 12,
 },
 text: {
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: '500'
 },
 sectionTwo: {
     padding: 5,
     justifyContent: 'flex-start',
     width: '80%',
     height: 40
     
 },
 sectionThree: {
    padding: 5,
    justifyContent: 'flex-start',
    width: '80%',
    marginTop: 70,
    height: 40
 },
 sectionFive: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
 },
 button: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3BD5C2'
 },
 buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
 }
})
