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

 },
 content: {},
 sectionOne: {},
 sectionTwo: {},
 sectionThree: {},
 sectionFour: {},
 sectionFive: {},
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
