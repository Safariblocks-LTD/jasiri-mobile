
import * as React from 'react';
import {

    ScrollView,
    TouchableOpacity,
    Image,
    View
} from "react-native";
import { Center, VStack, Box, Stack, Pressable, HStack, Text, Divider } from "native-base";
import { MyAppText, textStyles } from '../../components/common/appTexts';
import { Icon } from 'react-native-elements';
import Loader from '../../components/loading'
import { NormalButton } from '../../components/common';
import {
    styles
} from '../agent/styles';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import { useDispatch } from 'react-redux';




export const ManageAccount = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const navigation = useNavigation()
    const dispatch = useDispatch()








    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <Center>
                <MyAppText style={styles.title}>Manage Account</MyAppText>
                <VStack space={4} maxW="90%">
                    <Center>
                        <TouchableOpacity onPress={()=> navigation.navigate("Timer")}>
                            <HStack space={10} style={styles.settingActions}>
                                <HStack space={4}>
                                    <Image
                                        // style={styles.tinyLogo}
                                        source={require('../../assets/Timer.png')}
                                    />
                                    <Text fontSize="md" bold>Set Timer </Text>
                                </HStack>

                                <Icon
                                    name='chevron-right'
                                    type='material'
                                    size={40}
                                />
                            </HStack>
                        </TouchableOpacity>
                        <Divider my="2" bg="#807D7D" w="75%" />
                        <TouchableOpacity onPress={() => navigation.navigate("ManageLocation")}>
                            <HStack space={10} style={styles.settingActions}>
                                <HStack space={4}>
                                    <Image
                                        // style={styles.tinyLogo}
                                        source={require('../../assets/location.png')}
                                    />
                                    <Text fontSize="md" bold>Manage Location </Text>
                                </HStack>

                                <Icon
                                    name='chevron-right'
                                    type='material'
                                    size={40}
                                />
                            </HStack>
                        </TouchableOpacity>

                        <Divider my="2" bg="#807D7D" w="75%" />
                        <TouchableOpacity onPress={() => navigation.navigate("AgentDirectory")}>
                            <HStack space={10} style={styles.settingActions}>
                                <HStack space={4}>
                                    <Image
                                        // style={styles.tinyLogo}
                                        source={require('../../assets/activity.png')}
                                    />
                                    <Text fontSize="md" bold>Manage Activity </Text>
                                </HStack>

                                <Icon
                                    name='chevron-right'
                                    type='material'
                                    size={40}
                                />
                            </HStack>
                        </TouchableOpacity>

                        <Divider my="2" bg="#807D7D" w="75%" />
                        <TouchableOpacity onPress={() => console.log("I'm Pressed")}>
                            <HStack space={10} style={styles.settingActions}>
                                <HStack space={4}>
                                    <Image
                                        // style={styles.tinyLogo}
                                        source={require('../../assets/verify.png')}
                                    />
                                    <Text fontSize="md" bold>Verify Identity </Text>
                                </HStack>

                                <Icon
                                    name='chevron-right'
                                    type='material'
                                    size={40}
                                />
                            </HStack>
                        </TouchableOpacity>

                        <Divider my="2" bg="#807D7D" w="75%" />
                        <TouchableOpacity onPress={() => console.log("I'm Pressed")}>
                            <HStack space={10} style={styles.settingActions}>
                                <HStack space={4}>
                                    <Icon
                                        name='account-circle'
                                        type='material'
                                        size={40}
                                    />
                                    <Text fontSize="md" bold>Change Avatar</Text>
                                </HStack>

                                <Icon
                                    name='chevron-right'
                                    type='material'
                                    size={40}
                                />
                            </HStack>
                        </TouchableOpacity>

                        <Divider my="2" bg="#807D7D" w="75%" />
                    </Center>

                </VStack>
                <NormalButton title='Disable Account' style={styles.button2}/>
            </Center>

        </ScrollView>
    )
}




