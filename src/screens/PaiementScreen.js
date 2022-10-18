import { VStack, Center } from 'native-base';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const PaiementApp = () => {
  return (
    <SafeAreaView>
      <VStack space={4} alignItems="center">
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>Test</Center>
        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3}></Center>
        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3}></Center>
      </VStack>;
    </SafeAreaView>
  )
}

export default PaiementApp;