import { Button, NativeBaseProvider, ScrollView } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const AboJunior = ({ navigation }) => {
  return (
    <NativeBaseProvider>

        <SafeAreaView style={styles.safeView}> 

            <TouchableOpacity style={styles.paiementBtn}
            onPress={() => navigation.navigate('Paiement')} title='Paiement Screen'>
                <View>
                <Text style={styles.premiumTxt}>
                <Image
                    style={styles.medailleIcon}
                    source={require("../../assets/icons/medaille.png")}>
                </Image>
                    PREMIUM
                </Text>

                <Text style={styles.priceTxt}>
                
                    36 CHF/an
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

    </NativeBaseProvider>
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
  },
  viewInfo:{
    backgroundColor: "#e3e3e3",
    borderWidth: 2,
    borderRadius : 10,
    margin : 20,
    justifyContent: 'flex-end'
  },
  infoPrixTxt:{
    fontSize : 25,
    textAlign:'center',
    margin:10,
  }
  
})

export default AboJunior;