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


const SeedPhrase = ({ navigation }) => {
  const address = useSelector((state: RootState) => state.newAccount.address)
  const mnemonic = useSelector((state: RootState) => state.newAccount.mnemonic).split(' ')

  const handleClick = () => {
    navigation.navigate('Dash board')
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
              <Center><Text style={styles.section1Text1}>Write down your passphrase</Text></Center>
            </HStack>
          </VStack>
          <View style={styles.section2}>
            <Center mb="3"ml="4">
              <Text style={styles.section2Text2}>
                make sure you write it down and store it securely. If you lose it, you will lose access to your wallet. No one will help you recover it
              </Text>
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




