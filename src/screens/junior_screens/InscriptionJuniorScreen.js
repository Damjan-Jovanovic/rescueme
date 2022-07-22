import React from "react";
import { NativeBaseProvider, Center, Heading, VStack, FormControl, Input, Button, Box } from "native-base";

const InscriptionJunior = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Center bg="#e4e8ff" h="100%" w="100%">
                <Box safeArea p="2" h="80%" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "#013d77"
                    }} fontWeight="semibold">
                        Create a Junior account
                    </Heading>
                    <Heading mt="1" color="#013d77" _dark={{
                        color: "#013d77"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input borderColor="#013d77"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" borderColor="#013d77"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type="password" borderColor="#013d77"/>
                        </FormControl>
                        <Button
                            onPress = {()=>navigation.navigate('JuniorSummaryTwo')} title= 'Next Screen' 
                            mt="2" bg="#013d77">
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
};

export default InscriptionJunior;