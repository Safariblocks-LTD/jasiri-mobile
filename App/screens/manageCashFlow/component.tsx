
import * as React from 'react';
import {

    ScrollView,
    TouchableOpacity,
    Image,
    View
} from "react-native";
import { Center, VStack, Box, Stack, FormControl, HStack, Input, Divider } from "native-base";
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




export const ManageCashFlow = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const navigation = useNavigation()
    const dispatch = useDispatch()








    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <Center>
                <MyAppText style={styles.title}>Manage Cash Flow</MyAppText>
                <VStack space={4} w="80%">
                    <Center style={styles.down}>
                        <Box style={styles.box} bg={"#D1FDE2"} p="4" rounded="lg" _text={{
                            fontSize: "md",
                            fontWeight: "medium",
                            color: "warmGray.50",
                            textAlign: "center"
                        }}>
                            <MyAppText>In this section, you are required to key in the Amount of money you have in your bank Account.
                                This helps the user know how much money he/she can withdraw at a given time </MyAppText>
                        </Box>
                    </Center>
                    <VStack>
                        <FormControl>
                            <FormControl.Label>Enter Amount:</FormControl.Label>
                            <Input variant="outline" bg="#D1FDE2" placeholder="0700000000" />
                        </FormControl>
                        <Center w="100%" mt={10}>
                            <NormalButton title='Confirm with SilentData' style={styles.button2} />
                        </Center>
                    </VStack>
                </VStack>
            </Center>

        </ScrollView>
    )
}




