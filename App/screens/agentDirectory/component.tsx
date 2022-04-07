
import * as React from 'react';
import {

    ScrollView,
    TouchableOpacity,
    Image,
    View
} from "react-native";
import { Center, VStack, Box, Stack, FormControl, HStack, Avatar, Divider } from "native-base";
import { MyAppText, textStyles } from '../../components/common/appTexts';
import { Icon } from 'react-native-elements';
import Loader from '../../components/loading'
import { NormalButton } from '../../components/common';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import { useDispatch } from 'react-redux';




export const AgentDirectory = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const navigation = useNavigation()
    const dispatch = useDispatch()








    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <Center w="100%" >
                <MyAppText style={styles.title}>Agent Directory</MyAppText>
                <VStack space={4} >
                  
                        <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg" _text={{
                            fontSize: "md",
                            fontWeight: "medium",
                            color: "warmGray.50",
                            textAlign: "center"
                        }}>
                            <HStack space={5}>
                                <Avatar bg="cyan.500" source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}></Avatar>
                                <VStack>
                                    <MyAppText style={styles.boxText}>James Kimani </MyAppText>
                                    <HStack space={12} justifyContent="space-between">
                                        <MyAppText style={styles.boxText2}>Cash Available:</MyAppText>
                                        <MyAppText style={styles.boxText2}>200,000 Ksh</MyAppText>
                                    </HStack>
                                    <Divider bg="#333" thickness="1"/>
                                    <HStack space={12} justifyContent="space-between">
                                        <MyAppText style={styles.boxText2}>Location:</MyAppText>
                                        <MyAppText style={styles.boxText2}>Nairobi</MyAppText>
                                    </HStack>
                                    <Divider bg="#333" thickness="1"/>
                                    <HStack space={12} justifyContent="space-between">
                                        <MyAppText style={styles.boxText2}>Rating:</MyAppText>
                                        <MyAppText style={styles.boxText2}>Nairobi</MyAppText>
                                    </HStack>
                                </VStack> 
                            </HStack>

                        </Box>

                    <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg" _text={{
                        fontSize: "md",
                        fontWeight: "medium",
                        color: "warmGray.50",
                        textAlign: "center"
                    }}>
                        <HStack space={5}>
                            <Avatar bg="cyan.500" source={{
                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            }}></Avatar>
                            <VStack>
                                <MyAppText style={styles.boxText}>James Kimani </MyAppText>
                                <HStack space={12} justifyContent="space-between">
                                    <MyAppText style={styles.boxText2}>Cash Available:</MyAppText>
                                    <MyAppText style={styles.boxText2}>200,000 Ksh</MyAppText>
                                </HStack>
                                <Divider bg="#333" thickness="1" />
                                <HStack space={12} justifyContent="space-between">
                                    <MyAppText style={styles.boxText2}>Location:</MyAppText>
                                    <MyAppText style={styles.boxText2}>Nairobi</MyAppText>
                                </HStack>
                                <Divider bg="#333" thickness="1" />
                                <HStack space={12} justifyContent="space-between">
                                    <MyAppText style={styles.boxText2}>Rating:</MyAppText>
                                    <MyAppText style={styles.boxText2}>Nairobi</MyAppText>
                                </HStack>
                            </VStack>
                        </HStack>

                    </Box>
                </VStack>
            </Center>

        </ScrollView>
    )
}




