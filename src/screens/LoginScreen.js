import React from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, ImageBackground } from 'react-native';
import colors from '../config/colors';

const LoginScreen=({props}) =>{
    return (
        <SafeAreaView style={stylesBackground.background}>
            <Image
                style={stylesHeader.image}
                source={require('../assets/logoSeeThrough.png')}
            ></Image>

        </SafeAreaView>
    );
}

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