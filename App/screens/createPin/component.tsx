
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





export const CreatePin = ({ navigation }: navigation) => {
  const [loading, setLoading] = React.useState<boolean>()
  const [code, setCode] = React.useState('')
  const [confirmCode, setConfirmCode] = React.useState('')

  const [value, setValue] = React.useState('');
 

  const buttonPress = () => {
    
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
            value={code}
            onTextChange={code => setCode(code)}
            onFulfill={() => console.log('Do something')}
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
            value={confirmCode}
            onTextChange={confirmCode => setConfirmCode(confirmCode)}
            onFulfill={() => console.log('Do something')}
            onBackspace={() => console.log('No more back.')}
          />
        </VStack>
        <NormalButton title='Create Pin' clickHandler={buttonPress} style={styles.button} />
      </VStack>
    </ScrollView>
  )
}




