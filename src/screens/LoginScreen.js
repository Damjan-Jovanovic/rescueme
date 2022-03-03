import React from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, ImageBackground } from 'react-native';

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.background}>

            <Image
                style={styles.middle}
                source={require('../assets/logoSeeThrough.png')}
            ></Image>

            <View style={styles.header}>
                <Image
                    style={styles.image}
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

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#87CEEB',
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
    header:{
        backgroundColor: '#87CEEB',
    },
    image:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 50,
        height: 50,
    }
})


export default LoginScreen;