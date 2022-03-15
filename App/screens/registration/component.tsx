
import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Center, Stack, VStack, Divider, Heading, HStack } from "native-base";
import { styles } from "./styles";
import { StyleText, MyAppText, textStyles } from '../../components/common/appTexts';

type navigation = {
    navigation: any
}

export const Registration = ({ navigation }: navigation) => {
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

        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textbox}>
                    <StyleText style={{ fontWeight: "bold" }}>
                        <MyAppText style={styled.heading(1.7)}>Welcome to the Jasiri wallet</MyAppText>
                    </StyleText>

                </View>
                <VStack space="5" mt="4" px="8">
                    <HStack space={2} justifyContent="space-around">
                        <Icon
                            name='person-add-alt-1'
                            type='material'
                            size={40}
                        />
                        <Center style={styles.icon1}>
                            <MyAppText style={styles.iconText} onPress={() => navigation.navigate("Create Account")}>Create Account</MyAppText>
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
                            <MyAppText style={styles.iconText2} onPress={() => navigation.navigate("Recover Account")}>Recover with passphrase</MyAppText>
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
                        <MyAppText style={styles.footerText}>
                            By creating an account, you agree to Jasiri terms and conditions and privacy policy
                        </MyAppText>
                    </Center>
                </View>
            </View>
        </View>
    )
}




