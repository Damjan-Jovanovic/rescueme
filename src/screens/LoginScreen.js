import React from 'react';
import {StyleSheet } from 'react-native';
import colors from '../config/colors';
import { NativeBaseProvider, Center, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Box } from 'native-base';

const LoginScreen=({ navigation }) =>{
    return (
        <NativeBaseProvider>
            <Center bg="#e4e8ff" h="100%" w="100%">
            <Box safeArea  p="2" py="8" h="80%" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: colors.primaryBackground
            }}>
                Connexion
                </Heading>
                <Heading mt="1" _dark={{
                color: "#013d77"
            }} color="#013d77" fontWeight="medium" size="xs">
                Connectez-vous pour continuer!
                </Heading>

                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input borderColor="#013d77"/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Mot de passe</FormControl.Label>
                    <Input type="password" borderColor="#013d77"/>
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "#013d77"
                }} alignSelf="flex-end" mt="1">
                    Mot de passe oublié ?
                    </Link>
                </FormControl>
                <Button 
                    onPress = {()=>navigation.navigate('DrawerScreen')} title= 'Next Screen'
                    mt="2" background="#013D77">
                    Connexion
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="#013d77" _dark={{
                    color: "#013d77"
                }}>
                    Je n'ai pas encore de compte.{" "}
                    </Text>
                    <Link 
                    onPress = {()=>navigation.navigate('Inscription')} title= 'Next Screen'
                    _text={{
                    color: "#013d77",
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