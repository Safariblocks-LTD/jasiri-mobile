
import * as React from 'react';
import {

    ScrollView,
    TouchableOpacity, 
    Image, 
    View
} from "react-native";
import { Center, VStack, Box, Stack, Avatar, HStack, Text, IconButton } from "native-base";
import { MyAppText, textStyles } from '../../components/common/appTexts';
import Loader from '../../components/loading'
import { NormalButton } from '../../components/common';
import {
    styles
} from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn, setAddress, setMnemonic, setErrorMessage, setroutes } from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAccount, setPassword, loginAccount } from '../../services';



export const AgentDashboard = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const [code, setCode] = React.useState('')

    const [encrypted, setEncrypted] = React.useState('');

    const navigation = useNavigation()
    const dispatch = useDispatch()

    React.useEffect(() => {
        (async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('accountData')
                console.log('hex:-------------', jsonValue)
                setEncrypted(jsonValue)

            }
            catch (e) {
                //
                console.log(' error reading value  ')
            }
        })();
    }, [])






    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <Center>
                <MyAppText style={styles.title}>Agent dashboard</MyAppText>
                <VStack space={4} w="90%">
                    {/* <Center style={styles.down}> */}
                    <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg" _text={{
                        fontSize: "md",
                        fontWeight: "medium",
                        color: "warmGray.50",
                        textAlign: "center"
                    }}>
                        <Center>
                            <Stack space={4}>
                                <HStack space={12}>
                                    <MyAppText style={styles.boxText}>Available Cash </MyAppText>
                                    <MyAppText style={styles.boxText}>100,000 Ksh</MyAppText>
                                </HStack>
                            </Stack>
                        </Center>
                    </Box>
                    {/* </Center> */}
                    <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg">
                        <Center>
                            <Stack space={4}>
                                <HStack space={12}>
                                    <MyAppText style={styles.innerText} >Pending Withdrawals </MyAppText>
                                    <Center>
                                        <Avatar.Group size="sm" max={4}>
                                            <Avatar bg="green.500" source={{
                                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            }}>
                                                AJ
                                            </Avatar>
                                            <Avatar bg="cyan.500" source={{
                                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            }}>
                                                TE
                                            </Avatar>
                                            <Avatar bg="indigo.500" source={{
                                                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            }}>
                                                JB
                                            </Avatar>
                                            <Avatar bg="amber.500" source={{
                                                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            }}>
                                                TS
                                            </Avatar>
                                            <Avatar bg="green.500" source={{
                                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            }}>
                                                AJ
                                            </Avatar>
                                            <Avatar bg="cyan.500" source={{
                                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            }}>
                                                TE
                                            </Avatar>
                                            <Avatar bg="indigo.500" source={{
                                                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            }}>
                                                JB
                                            </Avatar>
                                            <Avatar bg="amber.500" source={{
                                                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            }}>
                                                TS
                                            </Avatar>
                                            <Avatar bg="cyan.500" source={{
                                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            }}>
                                                TE
                                            </Avatar>
                                            <Avatar bg="cyan.500" source={{
                                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            }}>
                                                TE
                                            </Avatar>
                                        </Avatar.Group>
                                    </Center>
                                </HStack>
                                <VStack>
                                    <HStack space={2}>
                                        <Avatar size="sm" bg="cyan.500" source={{
                                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        }}>
                                            TE
                                        </Avatar>
                                        <Text fontSize="md" color={"#53DAD2"} bold>James Kimani </Text>
                                    </HStack>
                                    <HStack space={5} style={styles.lowerRow}>
                                        <Text fontSize="md" bold>Amount </Text>
                                        <Text fontSize="md" bold>:</Text>
                                        <Text fontSize="md" bold>1000 JSR </Text>
                                    </HStack>
                                    <HStack space={5} style={styles.lowerRow}>
                                        <Text fontSize="md" bold>Amount in Ksh</Text>
                                        <Text fontSize="md" bold>:</Text>
                                        <Text fontSize="md" bold>750.00 Ksh </Text>
                                    </HStack>
                                    <HStack space={5} style={styles.lowerRow}>
                                        <Text fontSize="md" bold>Count down </Text>
                                        <Text fontSize="md" bold>:</Text>
                                        <Text fontSize="md" bold>12:59 </Text>
                                    </HStack>
                                    <HStack space={5} style={styles.lowerRow}>
                                        <Text fontSize="md" bold>Amount </Text>
                                        <Text fontSize="md" bold>:</Text>
                                        <Text fontSize="md" bold>20 Mar 2022 5:15  PM </Text>
                                    </HStack>
                                </VStack>
                                <HStack space={12} style={styles.buttonRow}>
                                    <NormalButton title='Confirm' style={styles.button}
                                    // clickHandler={navigation.navigate("AgentSignUp")}
                                    />
                                    <NormalButton title='Cancel' style={styles.button}
                                    // clickHandler={navigation.navigate("AgentSignUp")}
                                    />
                                </HStack>
                            </Stack>
                        </Center>
                    </Box>
                    <VStack>
                        <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg">
                            <Center>
                                <Stack space={4}>
                                    <HStack space={12}>
                                        <View style={styles.quickActions}>
                                            <TouchableOpacity onPress={() => navigation.navigate("ManageAccount")}
                                                style={styles.quickActionsItem}>
                                                <Image
                                                    // style={styles.tinyLogo}
                                                    source={require('../../assets/manage.png')}
                                                />
                                                <MyAppText style={styles.tinyText}> Manage Account </MyAppText>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate("Agent")}
                                                style={styles.quickActionsItem}>
                                                <Image
                                                    // style={styles.tinyLogo}
                                                    source={require('../../assets/liquidity.png')}
                                                />
                                                <MyAppText style={styles.tinyText}> Liquidity Pool </MyAppText>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.quickActionsItem}>
                                                <Image
                                                    // style={styles.tinyLogo}
                                                    source={require('../../assets/cashflow.png')}
                                                />
                                                <MyAppText style={styles.tinyText}> Cash Flow </MyAppText>
                                            </TouchableOpacity>

                                        </View>
                                    </HStack>
                                </Stack>
                            </Center>
                        </Box>
                    </VStack>
                </VStack>
            </Center>

        </ScrollView>
    )
}




