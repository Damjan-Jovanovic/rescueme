import React from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, ImageBackground } from 'react-native';


function WelcomeScreen(props) {
    return (
        <SafeAreaView style={stylesBackground.background}>
            <Image
                style={stylesMiddle.middle}
                source={require('../assets/logoSeeThrough.png')}
            ></Image>

            <View style={stylesButton.btn}>
                <Button 
                    title='Connexion'
                    //onPress={() => navigate('LoginScreen')}
                    //color etc
                />
                <Button 
                    title='Inscription'
                
                />
            </View>
        </SafeAreaView>
    );
}

const stylesBackground = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#87CEEB',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const stylesMiddle = StyleSheet.create({
    middle:{
        width: 300,
        height: 300,
    }
})

const stylesButton = StyleSheet.create({
    btn:{
        
    }
})

export default WelcomeScreen;