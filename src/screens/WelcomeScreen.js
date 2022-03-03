import React from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={stylesBackground.background}>
            <Image
                style={stylesMiddle.middle}
                source={require('../assets/logoSeeThrough.png')}
            ></Image>




            <TouchableOpacity  style={styleLoginButton.loginButton} onPress = {()=>navigation.navigate('Login')} title= 'Next Screen'>
                <View style={styleLoginButton.loginButton}><Text style={styleBtn.textButton}>Connexion</Text></View>

            </TouchableOpacity>

            <View style={styles.space}></View>

            <TouchableOpacity  style={styleLoginButton.registerButton}>
                <View style={styleLoginButton.registerButton}>
                    <Text style={styleBtn.textButton}>
                        Inscription
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.space}></View>

        </SafeAreaView>
    );
}

const stylesBackground = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#87CEEB',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
    }
})

const styles = StyleSheet.create({
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})

const stylesMiddle = StyleSheet.create({
    middle:{
        width: 200,
        height: 200,
        position: 'absolute',
        top: 50
    }
})

const styleLoginButton = StyleSheet.create({
    loginButton:{
        width: 300,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
    },
    registerButton:{
        width: 300,
        height: 70,
        borderRadius: 30,
        backgroundColor: "#4ecdc4",
        justifyContent: 'center'
    }
})

const styleBtn = StyleSheet.create({
    textButton:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'

    }
})

export default WelcomeScreen;
