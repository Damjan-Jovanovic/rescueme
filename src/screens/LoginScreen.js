import React from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, ImageBackground } from 'react-native';

function LoginScreen(props) {
    return (
        <SafeAreaView style={stylesBackground.background}>

            <View style={stylesHeader.header}>
                <Image
                    style={stylesImage.image}
                    source={require('../assets/logoSeeThrough.png')}
                
                ></Image>
                <Text>
                    RESCUE ME
                </Text>
            </View>

            <View>
                    
            </View> 

        </SafeAreaView>
    );
}

const stylesBackground = StyleSheet.create({
    background:{
        backgroundColor: '#87CEEB',
    }
})
const stylesHeader = StyleSheet.create({
    header:{
        backgroundColor: '#87CEEB',
    }
})
const stylesImage = StyleSheet.create({
    image:{
        justifyContent: 'left',
        alignItems: 'left',
        width: 50,
        height: 50,
    }
})

export default LoginScreen;