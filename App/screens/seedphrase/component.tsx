import * as React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 05ed0d1 (added a new file and modified other files)
type navigation = {
    navigation: any
  } 

const SeedPhrase = ({navigation}: navigation) => {
<<<<<<< HEAD
=======
const SeedPhrase = () => {
>>>>>>> a14de56 (added a seed phrase page)
=======
>>>>>>> 05ed0d1 (added a new file and modified other files)
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.first}>
                    <View style={styles.section1}>
                       <AntDesign style={styles.section1Icon} name="exclamationcircleo" size={24} color="#55B2A6" backgroundColor="#55B2A6" />
                    </View>
                    <View style={styles.section2}>
                       <Text style={styles.section2Text1}>Write down your passphrase</Text>
                        <Text style={styles.section2Text2}>
                        make sure you write it down and store it securely. If you lose it, you will lose access to your wallet. No one will help you recover it
                        </Text>
                    </View>
                </View>
                <View style={styles.second}>
                    <View style={styles.list1}>
                        <FlatList
                            data={list1}
                            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                        />
                    </View>
                    <View style={styles.list2}> 
                        <FlatList
                                data={list2}
                                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                            />
                    </View>
                </View>
                <View style={styles.third}>
                <TouchableOpacity style={styles.button}>
                        <Text 
                        style = {styles.buttonText}
<<<<<<< HEAD
<<<<<<< HEAD
                        onPress={() => navigation.navigate("Seed Phrase Final Page")}
                        >
                         Next
=======
                        >
                         Recover Account
>>>>>>> a14de56 (added a seed phrase page)
=======
                        onPress={() => navigation.navigate("Seed Phrase Final Page")}
                        >
                         Next
>>>>>>> 05ed0d1 (added a new file and modified other files)
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SeedPhrase

const styles = StyleSheet.create({
  container: {
  flex:1,
  width: '100%',
  height: '100%',
<<<<<<< HEAD
=======
  borderWidth: 1
>>>>>>> a14de56 (added a seed phrase page)
  },
  content: {
      alignItems: 'center'
  },
  first: {
      marginTop: 20,
      height: '25%',
      backgroundColor: '#AAC8C2',
      width: 320,
      borderRadius: 35,
      display: 'flex',
      flexDirection: 'row'
  },
  section1: {
      marginTop: 17,
      justifyContent: 'flex-start',
  },
  section1Icon: {
      marginLeft: 20
  },
  section2: {
      margin: 15,
      justifyContent: 'flex-start',

  },
  section2Text1: {
      fontSize: 14,
      marginTop: 5,
      fontWeight: '500',
      fontStyle: 'normal',
      color: 'black'
  },
  section2Text2: {
      marginTop: 20,
      width: 250,
      color: 'black',
      fontSize: 14
  },
  second: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      height: '50%',
      backgroundColor: '#AAC8C2',
      width: 320,
      borderRadius: 35
  },
  list1: {
      marginTop: 30,
      marginLeft: 30,
      width: '50%'
  },
  list2: {
      marginTop: 30,
      width: '50%'
  },
  item: {
      fontSize:14,
      color: 'black',
      fontWeight: 'bold'
  },
  third: {
      height: '25%',
      justifyContent: 'center',
  },
  button: {
      marginBottom: 30,
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

const list1 = [
    {key: "Android"}, 
    {key: "Lorem"}, 
    {key: "Ipsum"}, 
    {key: "java"}, 
    {key: "Linux"}, 
    {key: "ubuntu"}, 
    {key: "file"}, 
    {key: "adhere"}, 
    {key: "network"}, 
    {key: "system"}, 
    {key: "keyboard"}, 
    {key: "Compare"}, 
    {key: "Collect"}, 
    {key: "link"}, 
    {key: "Integirty"}
]

const list2 = [
    {key: "kick"}, 
    {key: "toy"}, 
    {key: "ramp"}, 
    {key: "cake"}, 
    {key: "interact"}, 
    {key: "lady"}, 
    {key: "fuel"}, 
    {key: "find"}, 
    {key: "design"}, 
    {key: "bike"}
]
