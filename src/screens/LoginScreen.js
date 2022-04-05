import React from 'react';
import {StyleSheet } from 'react-native';
import colors from '../config/colors';
import { NativeBaseProvider, Center, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Box } from 'native-base';

const LoginScreen=({ navigation }) =>{
    return (
        <NativeBaseProvider style={stylesBackground.background}>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: colors.primaryBackground
            }}>
                Connexion
                </Heading>
                <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Connectez-vous pour continuer!
                </Heading>

                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Mot de passe</FormControl.Label>
                    <Input type="password" />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500"
                }} alignSelf="flex-end" mt="1">
                    Mot de passe oublié ?
                    </Link>
                </FormControl>
                <Button 
                    onPress = {()=>navigation.navigate('Home')} title= 'Next Screen'
                    mt="2" colorScheme="indigo">
                    Connexion
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Je n'ai pas encore de compte.{" "}
                    </Text>
                    <Link 
                    onPress = {()=>navigation.navigate('Inscription')} title= 'Next Screen'
                    _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm"
                }}
                    >
                    Inscription
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>);
};

const stylesBackground = StyleSheet.create({
    background:{
        backgroundColor: colors.primaryBackground,
    }
})

const stylesHeader = StyleSheet.create({
    image:{
        width: 100,
        height: 100,
        position: 'absolute',

        top: 10
    }
})

export default LoginScreen;