import { Button } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const AboApp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeView}> 
      <TouchableOpacity style={styles.paiementBtn}
        onPress={() => navigation.navigate('Paiement')} title='Paiement Screen'>
          <View>
            <Text style={styles.premium}>
              Add icon
              PREMIUM
            </Text>
            <Text style={styles.price}>
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
        </View>

        <View style={styles.space}></View>

        <View style={styles.genericView}>
          <Text style={styles.genericText}>
            Create a group with other members to receive and send the alert no matter the distance
          </Text>
        </View>

        <View style={styles.space}></View>

        <View style={styles.genericView}>
          <Text style={styles.genericText}>
          Extend the alert zone
          </Text>
        </View>

        <View style={styles.space}></View>

        <View style={styles.genericView}>
          <Text style={styles.genericText}>
          Access to a direct exchange channel with Rescue Me admins
          </Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeView:{
    paddingTop : 20,
  },
  paiementBtn: {
      alignSelf : 'center',
      width: '90%',
      height: 100,
      borderRadius: 10,
      backgroundColor: '#FFAA00',
  },
  premium : {
    textAlign : 'left',
    paddingLeft : 10,
    paddingTop: 10,

  },
  price: {
    textAlign : 'right',
    paddingTop : 40,
    paddingRight : 10,
  },
  genericView :{
      alignSelf : 'center',
      width: '90%',
      height: 100,
      backgroundColor: '#013D77',
      paddingTop : 20,
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
  }
})

export default AboApp;