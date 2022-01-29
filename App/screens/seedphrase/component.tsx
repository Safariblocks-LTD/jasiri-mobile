import * as React from 'react'
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type navigation = {
    navigation: any
  } 

const SeedPhrase = ({navigation}: navigation) => {
    return (
        <View style={styles.container}>
            <Modal>
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
                    <View style={styles.list1}> 
                        <FlatList
                                data={list2}
                                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                            />
                    </View>
                </View>
                <View style={styles.third}>
                    <TouchableOpacity style={styles.button} >
                            <Text 
                            style = {styles.buttonText}
                            onPress={() => navigation.navigate("Seed Phrase Final Page")}
                            >
                            Next
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </View>
    )
}

export default SeedPhrase

const styles = StyleSheet.create({
  container: {
  flex:1,
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  first: {
      marginTop: 20,
      height: '25%',
      backgroundColor: '#AAC8C2',
      width: '85%',
      borderRadius: 35,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
  },
  section1: {
    //   marginTop: 17,
  },
  section1Icon: {
      top: -40
  },
  section2: {
      justifyContent: 'flex-start',
      width: '80%',
      padding: 10

  },
  section2Text1: {
      fontSize: 14,
      fontWeight: '500',
      fontStyle: 'normal',
      color: 'black'
  },
  section2Text2: {
      marginTop: 15,
      width: 250,
      color: 'black',
      fontSize: 14
  },
  second: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10,
      padding: 10,
      backgroundColor: '#AAC8C2',
      width: '85%',
      borderRadius: 35
  },
  list1: {
      marginTop: 30,
  },
  item: {
      fontSize:14,
      color: 'black',
      fontWeight: 'bold'
  },
  third: {
      height: '25%',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
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
