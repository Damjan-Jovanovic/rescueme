import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreenOne from './src/screens/RegisterScreenOne';
import RegisterScreenTwo from './src/screens/RegisterScreenTwo';
import DrawerScreen from './src/screens/DrawerScreen';
import PaiementScreen from './src/screens/PaiementScreen';
import JuniorSummary from './src/screens/junior_screens/JuniorSummaryScreen';
import InscriptionJunior from './src/screens/junior_screens/InscriptionJuniorScreen';
import JuniorSummaryTwo from './src/screens/junior_screens/JuniorSummaryTwoScreen';
import JuniorAboScreen from './src/screens/junior_screens/AbonnementJuniorScreen';

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
        <Stack.Screen name="DrawerScreen" options={{ headerShown: false }} component={DrawerScreen} />
        <Stack.Screen name="Paiement" component={PaiementScreen} />
        <Stack.Screen name="JuniorSummary" component={JuniorSummary} />
        <Stack.Screen name="InscriptionJunior" component={InscriptionJunior} />
        <Stack.Screen name="JuniorSummaryTwo" component={JuniorSummaryTwo} />
        <Stack.Screen name="JuniorAboScreen" component={JuniorAboScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack
