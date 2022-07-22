import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const JuniorSummary = ({navigation}) => {
  return (
   <SafeAreaView style={{
    flex: 1,
   }}>
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
        User 1/1
      </Text>
    </View>

      {/* Btn pour supprimer le compte junior */}
    <TouchableOpacity style={styles.createAccount}>

      <View style={styles.viewCreateAcc}>

        {/* Il faut ajouter une pop-up -> êtes-vous sûr de vouloir supprimer le compte junior*/}
        <Text style={styles.txtCreateAcc}>
          junior@mail.com 
          <Image
          style={styles.suppLogo}
          source={require("../../assets/icons/supprimer.png")} ></Image>
        </Text>

      </View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.addAccount}
    onPress={() => navigation.navigate('JuniorAboScreen')} title='Next screen'>

      <View style={styles.viewAddAccount}>
        <Text style={styles.txtAddAcc}>
          Add a Junior
        </Text>
      </View>
    </TouchableOpacity>


    <View style={styles.viewInfo}>
        <Text style={styles.infoPrixTxt}>
            First junior account free
            {"\n"}{"\n"}
            Each additional junior 
            {"\n"}
            accout at 36 CHF/year
        </Text>
    </View>
        
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
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
  },
  txtCreateAcc:{
    fontSize :15,
    fontWeight : 'bold',
    color : '#FFFFFF',
    textAlign : 'center',
  },
  addAccount : {
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: '45%',
  },
  viewAddAccount:{
    width: 200,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#007FFF',
    justifyContent: 'center',
  },
  txtAddAcc:{
    fontSize :15,
    fontWeight : 'bold',
    color : '#FFFFFF',
    textAlign : 'center',
  },
  suppLogo:{
    width:20,
    height: 20,
  },
  viewInfo:{
   
    backgroundColor: "#e3e3e3",
    borderWidth: 2,
    borderRadius : 10,
    margin : 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
  infoPrixTxt:{
    fontSize : 25,
    textAlign:'center',
    margin:10,
  }
});