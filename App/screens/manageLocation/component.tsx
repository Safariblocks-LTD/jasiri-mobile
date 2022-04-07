
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




export const ManageLocation = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const navigation = useNavigation()
    const dispatch = useDispatch()








    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <Center>
                <MyAppText style={styles.title}>Manage Location</MyAppText>
                <VStack w="80%">
                    <Box bg={"#D1FDE2"} p="4" rounded="lg">
                        <Center>
                            <Stack space={6} w="100%">
                                <FormControl w="100%" p={2}>
                                    <FormControl.Label >Enter City:</FormControl.Label>
                                    <Input variant="outline" bg="#fff" placeholder="Text" />
                                    <FormControl.Label p={2}>Enter Country:</FormControl.Label>
                                    <Input variant="filled" bg="#fff" placeholder="Text" />
                                </FormControl>
                            </Stack>
                        </Center>
                    </Box>
                </VStack>
                <NormalButton title='Save Changes' style={styles.button2}/>
            </Center>

        </ScrollView>
    )
}




