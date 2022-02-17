import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen/>;
}

