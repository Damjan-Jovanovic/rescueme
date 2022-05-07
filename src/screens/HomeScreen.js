import React from 'react';
import {NativeBaseProvider,Text,Center} from "native-base";
import {Image, StyleSheet} from "react-native";
import SwipeButton from 'rn-swipe-button';
import colors from '../config/colors';
 
// import all the components we are going to use
 
const App = () => {
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
    </NativeBaseProvider>
  );
};
export default App;
 
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});