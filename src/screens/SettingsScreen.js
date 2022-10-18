import { VStack, Center, Box, Pressable, HStack, Badge, Spacer, Flex, Container, Slider, Stack, ChevronRightIcon } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const SettingsApp = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(10);
  return (
    <SafeAreaView>
      <Pressable maxW="100%">
        {({
          isPressed
        }) => {
          return < VStack space={10} bg={"indigo.700"} maxW="100%" style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }
          } rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">

            <Container justifyContent={"center"} p="5" w="100%" h="20" rounded="md" shadow={3}><Text style={{ color: "white", fontWeight: "bold", textAlign: "left" }}>Changer la langue</Text><Text style={{ color: "#fdba74", fontWeight: "bold", textAlign: "justify" }}>Français </Text></Container>
          </VStack>;
        }}
      </Pressable>
      <Pressable maxW="100%">
        {({
          isPressed
        }) => {
          return < VStack space={10} bg={"indigo.700"} maxW="100%" style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }
          } rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">

            <Container justifyContent={"center"} p="5" w="100%" h="20" rounded="md" shadow={3}><Text style={{ color: "white", fontWeight: "bold", textAlign: "left" }}>Changer la photo de profile</Text></Container>
          </VStack>;
        }}
      </Pressable>
      <Pressable maxW="100%">
        {({
          isPressed
        }) => {
          return < VStack space={10} bg={"indigo.700"} maxW="100%" style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }
          } rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">

            <Container justifyContent={"center"} p="5" w="100%" h="20" rounded="md" shadow={3}><Text style={{ color: "white", fontWeight: "bold", textAlign: "left" }}>Partager Rescue Me</Text></Container>
          </VStack>;
        }}
      </Pressable>
      <Pressable maxW="100%">
        {({
          isPressed
        }) => {
          return < VStack space={10} bg={"indigo.700"} maxW="100%" style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }
          } rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">

            <Container justifyContent={"center"} p="5" w="100%" h="20" rounded="md" shadow={3}><Text style={{ color: "white", fontWeight: "bold", textAlign: "left" }}>A propos de Rescue Me </Text></Container>
          </VStack>;
        }}
      </Pressable>
      <Pressable maxW="100%">
        {({
          isPressed
        }) => {
          return < VStack space={10} bg={"indigo.700"} maxW="100%" style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }
          } rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">

            <Container justifyContent={"center"} p="5" w="100%" h="20" rounded="md" shadow={3}><Text style={{ color: "white", fontWeight: "bold", textAlign: "left" }}>Contacter le support</Text></Container>
          </VStack>;
        }}
      </Pressable>
      <Pressable maxW="100%">
        {({
          isPressed
        }) => {
          return < VStack space={10} bg={"indigo.700"} maxW="100%" style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }
          } rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">

            <Container justifyContent={"center"} p="5" w="100%" h="20" rounded="md" shadow={3}><Text style={{ color: "white", fontWeight: "bold", textAlign: "left" }}>Mon compte (ID : 2584456)</Text><Text style={{ color: "#fdba74", fontWeight: "bold", textAlign: "justify" }}>johndoe@gmail.com</Text></Container>
          </VStack>;
        }}
      </Pressable>
      < VStack space={10} bg={"indigo.700"} maxW="100%" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
        <Container justifyContent={"center"} p="5" w="100%" h="40" rounded="md" shadow={3}><Text style={{ color: "#fdba74", fontWeight: "bold", textAlign: "left" }}>Changer la distance maximale</Text>
          <Center space={3} p="5" color={"white"} alignItems="center" w="100%" maxW="300">
            <Text style={{ color: "#cffafe", fontWeight: "bold", textAlign: "center" }} >{onChangeValue} km</Text>
            <Slider defaultValue={10} colorScheme="cyan" onChange={v => {
              setOnChangeValue(Math.floor(v));
            }}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Center>
        </Container>

      </VStack>
    </SafeAreaView >
  )
}

export default SettingsApp;