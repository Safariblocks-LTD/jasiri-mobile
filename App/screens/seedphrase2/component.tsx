import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type navigation = {
    navigation: any
  }

const SeedPhraseFinalPage = ({navigation}: navigation) => {
    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <View style={styles.sectionOne}>
<<<<<<< HEAD
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
=======
                    <Text>Tap words in correct order to confirm your seed phrase</Text>
                </View>
                <View style={styles.sectionTwo}>
                    <Text>Select word #2</Text>
                </View>
                <View style={styles.sectionThree}>
                   <Text>Select word #2</Text>
                </View>
                <View style={styles.sectionThree}>
                   <Text>Select word #2</Text>
                </View>
                <View style={styles.sectionFour}>
                  <Text>Select word #2</Text>
>>>>>>> 05ed0d1 (added a new file and modified other files)
                </View>
                <View style={styles.sectionFive}>
                    <TouchableOpacity style={styles.button}>
                            <Text 
                            style = {styles.buttonText}
                            onPress={() => navigation.navigate("Dashboard")}
                            >
                            Next
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SeedPhraseFinalPage

const styles = StyleSheet.create({
 container: {
<<<<<<< HEAD
 flex: 1,
 width: '100%',
 height: '100%',
 backgroundColor: 'white'
 },
 content: {
     height: '100%',
     justifyContent: 'flex-start',
     alignItems: 'center'
 },
 sectionOne: {
     marginTop: 10,
     backgroundColor: '#B0DDD5',
     padding: 5,
     height: 60,
     width: 300,
     justifyContent: 'center',
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
     width: 300,
     marginTop: 30,
     height: 40
     
 },
 sectionThree: {
    padding: 5,
    justifyContent: 'flex-start',
    width: 300,
    marginTop: 70,
    height: 40
 },
 sectionFive: {
     marginTop: 100
 },
=======

 },
 content: {},
 sectionOne: {},
 sectionTwo: {},
 sectionThree: {},
 sectionFour: {},
 sectionFive: {},
>>>>>>> 05ed0d1 (added a new file and modified other files)
 button: {
    width: 300,
    height: 42,
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
