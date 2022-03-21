
import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Card,
  Animated,
  SafeAreaView
} from "react-native";
import { Icon } from 'react-native-elements';
import { Center, Stack, VStack, Divider, Heading, HStack } from "native-base";
import { StyleText, MyAppText, textStyles } from '../../components/common/appTexts';
import Loader from '../../components/loading'
import { NormalButton } from '../../components/common';
import {
  styles
} from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';




type navigation = {
  navigation: any
}
const { Value, Text: AnimatedText } = Animated;





export const Login = ({ navigation }: navigation) => {
  const [loading, setLoading] = React.useState<boolean>()
  const [hasPin, setHasPin] = React.useState<boolean>(true)

  const [value, setValue] = React.useState('');
 

  const buttonPress = () => {
    setHasPin(false)
  }
  const Reset = () => {
    return (
      <ScrollView style={styles.container}>
        <Loader loading={loading} />
        <VStack space={10} style={styles.root}>
          <VStack>
            <MyAppText style={styles.title}>Create Pin</MyAppText>
            <SmoothPinCodeInput
              containerStyle={styles.cellContainer}
              cellSpacing={40}
              cellStyle={styles.cell}
              // ref={pinInput}
              // value={code}
              // onTextChange={code => setState({ code })}
              // onFulfill={this._checkCode}
              onBackspace={() => console.log('No more back.')}
            />
          </VStack>
          <VStack>
            <MyAppText style={styles.title}>Confirm Pin</MyAppText>
            <SmoothPinCodeInput
              containerStyle={styles.cellContainer}
              cellSpacing={40}
              cellStyle={styles.cell}
              // ref={confirmPinInput}
              // value={code}
              // onTextChange={code => setState({ code })}
              // onFulfill={this._checkCode}
              onBackspace={() => console.log('No more back.')}
            />
          </VStack>

          <NormalButton title='Create Pin'clickHandler={buttonPress} style={styles.button} />

        </VStack>

      </ScrollView>
    )
  }

  const styled = {
    heading: (scale) => {
      const fontSize = textStyles.fontSize * scale;

      return {
        lineHeight: fontSize * 1.4,
        marginBottom: 12,
        fontWeight: "bold",
        fontSize,
      };
    }
  }
  return (

   hasPin && hasPin ?
      <ScrollView style={styles.container}>
        <Loader loading={loading} />
        <VStack space={10} style={styles.root}>
          <VStack>
            <MyAppText style={styles.title}>To access your account, please enter your 4-digit Pin</MyAppText>
            <SmoothPinCodeInput
              containerStyle={styles.cellContainer}
              cellSpacing={40}
              cellStyle={styles.cell}
              // ref={pinInput}
              // value={code}
              // onTextChange={code => setState({ code })}
              // onFulfill={this._checkCode}
              onBackspace={() => console.log('No more back.')}
            />
          </VStack>
          <NormalButton title='Login' style={styles.button} />
          <Center style={styles.down}>
            <TouchableOpacity onPress={buttonPress}>
              <MyAppText style={styles.footer}>Forgot Pin?</MyAppText>
            </TouchableOpacity>  
          </Center>


        </VStack>

      </ScrollView>
      : <Reset />
  )
}




