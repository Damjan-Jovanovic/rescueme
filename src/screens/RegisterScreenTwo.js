import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import colors from "../config/colors";
import { NativeBaseProvider, Center, Heading, VStack, FormControl, Input, Button, HStack, Box, Text, Icon, Stack, Checkbox, AlertDialog, ScrollView } from "native-base";
import { Ionicons } from "@native-base/icons";

const RegisterScreenTwo = ({ navigation }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return (

    <NativeBaseProvider style={stylesBackground.background}>
      <ScrollView>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
              Inscription
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium" size="xs">
              Deuxième étape de l'inscription
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Nom</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Prénom</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Date de naissance</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Vérification de l'identité</FormControl.Label>
                <Text italic fontSize={"xs"}>
                  Veuillez s'il vous plaît prendre une photo de votre document
                  d'identité pour confirmer votre identité.
                </Text>
                <Stack direction={{ base: "column", md: "row", }} space={4} marginTop="2">
                  <Button variant="subtle" leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
                    Carte d'identité ou Passeport 
                  </Button>
                </Stack>
              </FormControl>
              <FormControl>
                <FormControl.Label>Photo personnelle</FormControl.Label>
                <Text italic fontSize={"xs"}>
                  Veuillez s'il vous plaît prendre une photo de votre visage avec votre carte d'identité à côté de votre visage pour confirmer votre identité.
                </Text>
                <Stack direction={{ base: "column", md: "row", }} space={4} marginTop="2">
                  <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
                    Photo personnelle
                  </Button>
                </Stack>
              </FormControl>
              <HStack space={4}>
                <Checkbox shadow={2} size="sm" value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
                  <Text fontSize={"xs"}>J'ai lu et j'accepte les conditions générales d'utilisation</Text>
                </Checkbox>
              </HStack>
            </VStack>
            <Center>
              <Button colorScheme="indigo" onPress={() => setIsOpen(!isOpen)}>
                Valider l'inscription
              </Button>
              <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                  <AlertDialog.CloseButton />
                  <AlertDialog.Header>Merci !</AlertDialog.Header>
                  <AlertDialog.Body>
                    Merci pour votre inscription. Vous recevrez un message de validation par e-mail et pourrez vous connecter dès que vos données auront été validées par un administrateur.
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button.Group space={2}>
                      <Button colorScheme="indigo" onPress={onClose}>
                        Compris !
                      </Button>
                    </Button.Group>
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog>
            </Center>
          </Box>
        </Center>
      </ScrollView>
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

export default RegisterScreenTwo;
