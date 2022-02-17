import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/favicon.png")}
            >
            <SafeAreaView>
                <Text>HELLO</Text>
            </SafeAreaView>

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    }
})
export default WelcomeScreen;