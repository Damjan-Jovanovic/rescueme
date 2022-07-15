import { Button, ScrollView } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const AboApp = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safeView}> 
        <TouchableOpacity style={styles.paiementBtn}
          onPress={() => navigation.navigate('Paiement')} title='Paiement Screen'>
            <View>
              <Text style={styles.premiumTxt}>
              <Image
                  style={styles.medailleIcon}
                  source={require("../assets/icons/medaille.png")}>
              </Image>
                PREMIUM
              </Text>

              <Text style={styles.priceTxt}>
              
                60 CHF/an
              </Text>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={{
              fontSize:25,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
              Upgrade your account and get PREMIUM features
            </Text>
          </View>

          <View style={styles.genericView}>
            <Text style={styles.genericText}>
              Add a Rescue Me Junior account for an additional device with parents as guarantors
            </Text>
            <Image 
              style={styles.validateIcon}
              source={require("../assets/icons/jaccepte.png")}
            >
            </Image>
          </View>

          <View style={styles.space}></View>

          <View style={styles.genericView}>
            <Text style={styles.genericText}>
              Create a group with other members to receive and send the alert no matter the distance
            </Text>
            <Image 
              style={styles.validateIcon}
              source={require("../assets/icons/jaccepte.png")}
            >
            </Image>
          </View>

          <View style={styles.space}></View>

          <View style={styles.genericView}>
            <Text style={styles.genericText}>
            Extend the alert zone
            </Text>
            <Image 
              style={styles.validateIcon}
              source={require("../assets/icons/jaccepte.png")}
            >
            </Image>
          </View>

          <View style={styles.space}></View>

          <View style={styles.genericView}>
            <Text style={styles.genericText}>
            Access to a direct exchange channel with Rescue Me admins
            </Text>
            <Image 
              style={styles.validateIcon}
              source={require("../assets/icons/jaccepte.png")}
            >
            </Image>
          </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  safeView:{
    paddingTop : 20,
    
  },
  paiementBtn: {
    flex : 1, 
      alignSelf : 'center',
      width: '90%',
      height: 100,
      borderRadius: 10,
      backgroundColor: '#FFAA00',
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 6,
  },
  premiumTxt : {
    textAlign: 'left',
    paddingLeft : 10,
    fontSize : 30,
    alignItems : 'flex-start',
  },
  priceTxt: {
    textAlign : 'right',
    paddingTop : 10,
    paddingRight : 10,
    fontSize : 25,
  },
  genericView :{
      alignSelf : 'center',
      width: '90%',
      height: 110,
      backgroundColor: '#013D77',
      paddingTop : 20,
      flex: 1,
      justifyContent: "space-around",
      borderWidth: 2,
      borderColor: "#FFFFFF",
      borderRadius: 2,
  },
  genericText :{
    fontSize:15,
    textAlign: 'center',
    fontWeight: 'bold',
    color : 'white',
  },
  space: {
    width: 10, // or whatever size you need
    height: 10,
  },
  validateIcon: {
    alignSelf : 'center',
    width: 30,
    height: 30,
    paddingBottom: 10,
  },
  medailleIcon:{
    alignItems : 'flex-start',
    width : 40,
    height: 40,
  }
  
})

export default AboApp;