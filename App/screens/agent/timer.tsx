
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
} from './styles';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';




export const Timer = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const navigation = useNavigation()






    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <Center>
                <MyAppText style={styles.title}>Manage Account</MyAppText>
                <VStack space={4} maxW="90%">
                    <Center>
                        <Box style={styles.box} bg={"#D1FDE2"} p="5" rounded="lg" _text={{
                            fontSize: "md",
                            fontWeight: "medium",
                            color: "warmGray.50",
                            textAlign: "center"
                        }}>
                            <Center>
                                <Stack space={4}>
                                    <HStack space={12}>
                                        <MyAppText>The timer is a countdown  for how long you will take to process a withdrawal from the time you received a withdrwawal request from the user</MyAppText>
                                    </HStack>
                                </Stack>
                            </Center>
                        </Box>
                        
                    </Center>
                  
                       
                            <HStack justifyContent={"space-around"} space={4}>

                                <Box style={styles.box} bg={"#D1FDE2"} p="2" rounded="lg" _text={{
                                    fontSize: "md",
                                    fontWeight: "medium",
                                    color: "#000000",
                                    textAlign: "center"
                                }}>5 min</Box>
                                <Box style={styles.box} bg={"#D1FDE2"} p="2" rounded="lg" _text={{
                                    fontSize: "md",
                                    fontWeight: "medium",
                                    color: "#000000",
                                    textAlign: "center"
                                }}>10 min</Box>
                                <Box style={styles.box} bg={"#D1FDE2"} p="2" rounded="lg" _text={{
                                    fontSize: "md",
                                    fontWeight: "medium",
                                    color: "#000000",
                                    textAlign: "center"
                                }}>15 min</Box>
                            </HStack>
                   

                    <HStack justifyContent={"space-around"} space={4}>
                        <Box style={styles.box} bg={"#D1FDE2"} p="2" rounded="lg" _text={{
                            fontSize: "md",
                            fontWeight: "medium",
                            color: "#000000",
                            textAlign: "center"
                        }}>30 min</Box>
                        <Box style={styles.box} bg={"#D1FDE2"} p="2" rounded="lg" _text={{
                            fontSize: "md",
                            fontWeight: "medium",
                            color: "#000000",
                            textAlign: "center"
                        }}>45 min</Box>
                        <Box style={styles.box} bg={"#D1FDE2"} p="2" rounded="lg" _text={{
                            fontSize: "md",
                            fontWeight: "medium",
                            color: "#000000",
                            textAlign: "center"
                        }}>1 hour</Box>
                    </HStack>
                    
                    </VStack>
                <NormalButton title='Save Changes' style={styles.button2} />
            </Center>

        </ScrollView>
    )
}




