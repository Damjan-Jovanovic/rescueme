import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'deepskyblue ',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            textAlign: 'center',
           
        }}>
            <SafeAreaView style={stylesBackground.background}>
                
                <TouchableOpacity style={styleLoginButton.loginButton}
                    onPress={() => navigation.navigate('Connexion')} title='Next Screen'>

                    <View style={styleLoginButton.loginButton}>
                        <Text style={styleBtn.textButton}>
                            Connexion
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.space}></View>

                <TouchableOpacity style={styleLoginButton.registerButton}
                    onPress={() => navigation.navigate('Inscription')} title='Next Screen'>
                    <View style={styleLoginButton.registerButton}>
                        <Text style={styleBtn.textButton}>
                            Inscription
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.space}></View>
            </SafeAreaView>
        </ImageBackground>

    );
}

const stylesBackground = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
    }
})

const styles = StyleSheet.create({
    space: {
        width: 20, // or whatever size you need
        height: 20,
    }
})


const styleLoginButton = StyleSheet.create({
    loginButton: {
        width: 300,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
    },
    registerButton: {
        width: 300,
        height: 70,
        borderRadius: 30,
        backgroundColor: "#4ecdc4",
        justifyContent: 'center',
    }
})

const styleBtn = StyleSheet.create({
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',

    }
})

export default WelcomeScreen;
