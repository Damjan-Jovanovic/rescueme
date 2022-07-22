import React from 'react';
import {NativeBaseProvider,Center, Text} from "native-base";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import SwipeButton from 'rn-swipe-button';
 
 // param navigation utilisé uniquement pour pouvoir accéder à la partie Junior en mode test
const App = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center>
        <Image 
            style={styles.tinyLogo}
            source={require("../assets/profil.png")}
          >
          </Image>
          <Text>
            User name ...
          </Text>
          <Text>
            If premium or junior = display info
          </Text>
      </Center>

      {/* Swipe button for Alert */}
      <Center>
        
          <SwipeButton
          style={styles.swipebtn}
            disabled={false}
            //disable the button by doing true (Optional)
            swipeSuccessThreshold={70}
            height={150}
            //height of the button (Optional)
            width={330}
            //width of the button (Optional)
            title="Alarme !"
            //Text inside the button (Optional)
            //thumbIconImageSource={thumbIcon}
            //You can also set your own icon (Optional)
            onSwipeSuccess={() => {
              alert('Alarm activated!');
            }}
            //After the completion of swipe (Optional)
            railFillBackgroundColor="#0066CC" //(Optional)
            //railFillBorderColor="#007FFF" //(Optional)
            thumbIconBackgroundColor="#007FFF" //(Optional)
            thumbIconBorderColor="#0066CC" //(Optional)
            railBackgroundColor="#FFFFFF" //(Optional)
            railBorderColor="#007FFF" //(Optional)
          />
      
      </Center>

    {/* Composant à supprimé lors de création du backend. Utilisé pour test */}
     <Center>
        <TouchableOpacity style={styles.junior}
          onPress={() => navigation.navigate('JuniorSummary')} title='Next Screen'>
            <View >
              <Text style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
                Junior
              </Text>
            </View>
          
        </TouchableOpacity>
        

      </Center>
    </NativeBaseProvider>
  );
};
export default App;
 
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
  junior:{
    marginTop: 130,
    alignSelf: 'center',
    width: 300,
    height: 70,
    borderRadius: 30,
    backgroundColor: '#fc5c65',
    justifyContent: 'center',
  }
});