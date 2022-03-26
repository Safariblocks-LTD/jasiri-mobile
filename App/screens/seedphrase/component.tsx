import * as React from 'react'
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { NormalButton } from '../../components/common';
import { Container } from 'native-base';
import { styles } from './styles';
import { Center, Stack, VStack, Divider, Heading, HStack } from "native-base";
import { Icon } from 'react-native-elements';
import { StyleText, MyAppText, textStyles } from '../../components/common/appTexts';
import routes from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';


const SeedPhrase = () => {
 

  const account = useSelector((state: RootState) => state.newAccount.account)

  const accountObject = account.accountObject

  const mnemonic = accountObject && accountObject.mnemonic && accountObject.mnemonic.split(' ')
  const address = accountObject && accountObject.address && accountObject.address.split(' ')

  const navigation = useNavigation()
  const handleClick = () => {
    navigation.navigate(routes.LOGIN)
  }
    const styled = {
        heading: (scale) => {
            const fontSize = textStyles.fontSize * scale;

            return {
                lineHeight: fontSize * 1.4,
                marginBottom: 12,
                fontWeight: "500",
                fontSize
            };
        }
    }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Container style={styles.first}>
          <VStack my="2" ml="4">
            <HStack space={1} justifyContent="space-around">
              <Icon
                name='error'
                type='material'
                size={40}
                color="#55B2A6"
              />
              <Center><MyAppText style={styles.section1Text1}>Write down your passphrase</MyAppText></Center>
            </HStack>
          </VStack>
          <View style={styles.section2}>
            <Center mb="3"ml="4">
              <MyAppText style={styles.section2Text2}>
                make sure you write it down and store it securely. If you lose it, you will lose access to your wallet. No one will help you recover it
              </MyAppText>
            </Center>
          </View>
        </Container>
        {/*  */}
        <Container style={styles.second}>
          <VStack my="2" mx="2" style={styles.list1}>
            {mnemonic && mnemonic.map((item, index) => {
              return (<Text key={Math.random()}>{index + 1}{'.'} {item}</Text>)
            })}
          </VStack>
        </Container>
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




