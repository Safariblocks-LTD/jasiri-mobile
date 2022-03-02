import * as React from 'react'
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { NormalButton } from '../../components/common';



  

const SeedPhrase = ({navigation}) => {
    const address = useSelector((state: RootState)=>state.newAccount.address)
    const mnemonic = useSelector((state: RootState)=>state.newAccount.mnemonic).split(' ')

    const handleClick=()=>{
        navigation.navigate('Dash board')
    }
   
    return (
        <ScrollView>
        <View style={styles.container}>    
            <View style={styles.first}>
                <View style={styles.section1}>
                    <AntDesign  name="exclamationcircleo" size={24} color="#55B2A6" backgroundColor="#55B2A6" />
                    <Text style={styles.section1Text1}>Write down your passphrase</Text>
                </View>
                <View style={styles.section2}>
                  
                    <Text style={styles.section2Text2}>
                    make sure you write it down and store it securely. If you lose it, you will lose access to your wallet. No one will help you recover it
                    </Text>
                </View>
            </View>

            {/*  */}
            <View style={styles.second}>
                <View style={styles.list1}>
                    {mnemonic&&mnemonic.map((item, index)=>{
                        return (<Text key={Math.random()}>{index+1}{'.'} {item}</Text>)
                    })}
                   
                </View>
                <View style={styles.list1}> 
                    {mnemonic&&mnemonic.map((item, index)=>{
                        return (<Text key={Math.random()}>{index+1}{'.'} {item}</Text>)
                    })}
                </View>
            </View>
            <NormalButton
                     title='Next'
                     style={styles.button}
                     clickHandler={handleClick}
                     />
                      
               
        </View>
        </ScrollView>
    )
}

export default SeedPhrase

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  
  first: {
      marginTop: 20,
    //   height: '25%',
      backgroundColor: '#AAC8C2',
      width: '85%',
      borderRadius: 35,
      display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'space-around',
      alignItems: 'center'
  },
  section1: {
      marginTop: 17,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'flex-start',
    width: '90%',
  },

  section2: {
    //   justifyContent: 'flex-start',
      width: '80%',
      padding: 10,
    //   borderWidth: 1

  },
  section1Text1: {
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 5
  },
 
  section2Text2: {
    //   marginTop: 15,
    //   width: 250,
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
    //   marginTop: 30,
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
    backgroundColor: '#3BD5C2',
    margin: 20
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  }

})


