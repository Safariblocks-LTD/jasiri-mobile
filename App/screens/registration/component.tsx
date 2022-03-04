
import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Center, Stack, VStack, Divider, Heading, HStack } from "native-base";
import { styles } from "./styles";

type navigation = {
    navigation: any
}

export const Registration = ({ navigation }: navigation) => {
    return (

        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Welcome to the Jasiri wallet</Text>
                </View>
                <VStack space="5" mt="4" px="8">
                    <HStack space={2} justifyContent="space-around">
                        <Icon
                            name='person-add-alt-1'
                            type='material'
                            size={40}
                        />
                        <Center style={styles.icon1}>
                            <Text style={styles.iconText} onPress={() => navigation.navigate("Create Account")}>Create Account</Text>
                        </Center >
                        <Icon
                            name='chevron-right'
                            type='material'
                            size={40}
                        />
                    </HStack>
                    <HStack>
                        <Divider my="8" bg="#000000" thickness="2" mx="5" width={350} />
                    </HStack>
                    <HStack space={2} justifyContent="space-around">
                        <Icon
                            name='repeat'
                            type='material'
                            size={40}
                        />
                        <Center style={styles.icon1}>
                            <Text style={styles.iconText2} onPress={() => navigation.navigate("Recover Account")}>Recover with passphrase</Text>
                        </Center >
                        <Icon
                            name='chevron-right'
                            type='material'
                            size={40}
                        />
                    </HStack>
                </VStack>
                <View style={styles.footer}>
                    <Center>
                        <Text style={styles.footerText}>
                            By creating an account, you agree to Jasiri terms and conditions and privacy policy
                        </Text>
                    </Center>
                </View>
            </View>
        </View>
    )
}




