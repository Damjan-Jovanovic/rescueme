import React from 'react';
import { NativeBaseProvider, Text, Center, Avatar, HStack } from "native-base";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import SwipeButton from 'rn-swipe-button';

// param navigation utilisé uniquement pour pouvoir accéder à la partie Junior en mode test
const App = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center>
        <HStack justifyContent="center" space={2}>
          <Avatar bg="green.500" alignSelf="center" size="xl" source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }}>
          </Avatar>
        </HStack>
        <Text fontSize="xl">
          John Doe
        </Text>
        <Text>
          If premium or junior = display info here !
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
  junior: {
    marginTop: 130,
    alignSelf: 'center',
    width: 300,
    height: 70,
    borderRadius: 30,
    backgroundColor: '#fc5c65',
    justifyContent: 'center',
  }
});