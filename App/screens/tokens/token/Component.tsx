// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setVisible } from '../../../redux';


export const Token = (props: { route, navigation}) => {

  const [visible, setVisible] = React.useState(false)
  
  const dispatch = useDispatch()

  const vsState = useSelector((state: RootState)=>state.token.visible)
  
  React.useEffect(()=>{
    setVisible(vsState)
  }, [])
 

  const handleSend=()=>{
    dispatch(setVisible(false))
    setVisible(false)
  }

  
  return (
    <Modal visible={visible} >
      <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
         
          <TextInput
           editable
           maxLength={40}
           style={styles.textInput}
          >
          
          </TextInput>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSend}
          >
            <Text>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSend} >
            <Text>Receive</Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    // margin: 5,
    backgroundColor: '#ebe1c5',
    width: '100%',
    height: 800,
    justifyContent: 'flex-start',
    borderWidth: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#79E7E7',
    padding: 10,
    width: 150,
    height: 50,
    margin: 16,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row'

  },
  textInput: {
    width: 350,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10
  }
});

