import { VStack, Center, Box, Pressable, HStack, Badge, Spacer, Flex, Container, Slider, Stack, ChevronRightIcon } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const paymentScreen = () => {
    return <VStack space={4} alignItems="center">
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
    </VStack>
}

export default paymentScreen;