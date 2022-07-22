import { Button } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const JuniorSummary = ({navigation}) => {
  return (
   <SafeAreaView>
    <View style={styles.txtView}>
      <Text style={{
        fontSize: 25,
      }}>
        JUNIOR ACCOUNT
        {"\n      "} SUMMARY
      </Text>
      <Text style={{
        textAlign:'center',
      }}>
        <Image
         style={styles.UserLogo}
         source={require("../../assets/profil.png")}
        >
        </Image>

        {/* à modifier -> vérifier si le user dispose déjà d'un compte junior*/}
        User 0/1
      </Text>
    </View>

    <TouchableOpacity style={styles.createAccount}
      onPress={() => navigation.navigate('InscriptionJunior')} title='Next Screen'>

      <View style={styles.viewCreateAcc}>

        <Text style={styles.txtCreateAcc}>
          CREATE your free Junior account 
          <Image
          style={styles.plusLogo}
          source={require("../../assets/icons/signe-plus.png")} ></Image>
        </Text>

      </View>
    </TouchableOpacity>
        
   </SafeAreaView>
  )
}

export default JuniorSummary;

const styles = StyleSheet.create({
  txtView:{
    alignContent: 'center',
    alignSelf : 'center',
    margin:20,
  },
  UserLogo: {
    width:50,
    height: 50,
  },
  createAccount:{
    marginTop: 20,
    alignSelf: 'center',
  },
  viewCreateAcc:{
    width: 370,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#007FFF',
    justifyContent: 'center',
  },
  txtCreateAcc:{
    fontSize :15,
    fontWeight : 'bold',
    color : '#FFFFFF',
    textAlign : 'center',
  },
  plusLogo:{
    justifyContent: 'flex-end',
    width:20,
    height: 20,
  }
});