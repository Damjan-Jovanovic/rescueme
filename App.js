import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreenOne from './src/screens/RegisterScreenOne';
import RegisterScreenTwo from './src/screens/RegisterScreenTwo';
import HomeScreen from './src/screens/HomeScreen';
//import InviteContactScreen from './src/screens/InviteContactScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import 'react-native-gesture-hannpm indler';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Connexion" component={LoginScreen} />
        <Stack.Screen name="Inscription" component={RegisterScreenOne} />
        <Stack.Screen name="InscriptionTwo" component={RegisterScreenTwo} />
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
        {/*<Stack.Screen name="Invite member" component={InviteContactScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack
