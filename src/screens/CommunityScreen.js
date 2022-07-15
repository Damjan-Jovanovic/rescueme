import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import { ScrollView } from 'native-base';

const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safe}>
        <View style={styles.seeMoreContainer}>

          <Text style={styles.title}>
            We introduce RescueMe coins
          </Text>
          <ReadMore numberOfLines={3} 
                    seeMoreStyle={styles.seeMore}
                    seeLessStyle={styles.seeLess}
                    style={styles.textStyle}>

            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </ReadMore>
        </View>

        <View style={styles.seeMoreContainer}>
        <Text style={styles.title}>
            Application updates
          </Text>
          <ReadMore numberOfLines={3} style={styles.textStyle}>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </ReadMore>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
};

/*const seeMoreStyle = StyleSheet.create({
  seeMore:{
    color: 'black',
    fontWeight: 'bold',
  }
})

const seeLessStyle = StyleSheet.create({
  seeLess:{

  }
})*/

const styles = StyleSheet.create({
  safe: {
    padding: 6,
    flex: 1,
    
  },
  seeMoreContainer: {
    justifyContent: "space-around",
    alignSelf: 'center',
    width : '95%',
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    flex: 1,
    padding: 16,
  },
  textStyle: {
    fontSize:16,
    color: '#727272'
  },
  title:{
    fontSize: 20,
  },

});

export default Home;