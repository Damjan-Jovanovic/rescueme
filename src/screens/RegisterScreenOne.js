import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { NativeBaseProvider, Center, Heading, VStack, FormControl, Input, Button, Box } from "native-base";

const RegisterScreenOne = ({ navigation }) => {
    return (
        <NativeBaseProvider style={stylesBackground.background}>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <Button
                            onPress = {()=>navigation.navigate('InscriptionTwo')} title= 'Next Screen' 
                            mt="2" colorScheme="indigo">
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
};

const stylesBackground = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primaryBackground,
        justifyContent: "flex-end",
        alignItems: "center",
        textAlign: "center",
    },
});

const styles = StyleSheet.create({
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});

const stylesMiddle = StyleSheet.create({
    middle: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 50,
    },
});

const styleLoginButton = StyleSheet.create({
    loginButton: {
        width: 300,
        height: 70,
        borderRadius: 30,
        backgroundColor: "#fc5c65",
        justifyContent: "center",
    },
    registerButton: {
        width: 300,
        height: 70,
        borderRadius: 30,
        backgroundColor: "#4ecdc4",
        justifyContent: "center",
    },
});

const styleBtn = StyleSheet.create({
    textButton: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },
});

export default RegisterScreenOne;