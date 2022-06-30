import React, { useEffect, useState} from 'react';
import * as Contacts from 'expo-contacts';
import { StyleSheet, View, Text, FlatList,TouchableOpacity, SafeAreaView } from 'react-native'
import * as SMS from 'expo-sms';
import { TextInput } from 'react-native-gesture-handler';



export default function App() {

  const [contacts, setContacts ] = useState([])
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
 
        if (data.length > 0) {
          setContacts(data)
        }        
      }

    })();
  }, []);

 /* searchContacts = value => {
    const filteredContacts = this.state.inMemoryContacts.filter(contact => {
      let contactLowercase = (
        contact.firstName +
        ' ' +
        contact.lastName
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ contacts: filteredContacts });
  };*/



  return (

    <View style={{flex:1}}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#dddddd"
          style={{
            paddingTop: 10,
            backgroundColor: '#2f363c',
            height: 50,
            fontSize: 20,
            padding: 15,
            color: 'white',
            borderBottomWidth: 0.5,
            borderBottomColor: '#7d90a0'
          }}
          onChangeText={value => this.searchContacts(value)}
        />
    

      <View style={styles.container}>
        <FlatList
        /*style={{width: '80%'}}*/
          data={contacts}
          keyExtractor={(item) => item.id.toString()} 
          
          
          initialNumToRender={Array.length}
          renderItem={({item}) => {
            return (

              <View style={styles.row}>
                <TouchableOpacity onPress={() => SMS.sendSMSAsync(
                    item.phoneNumbers[0].number,
                    'Télécharge RescueMe'
                  )}>
                  <Text style={styles.contactName}>{item.name}</Text>
                    <Text  style={styles.contactum}> {item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].digits}</Text>
                  </TouchableOpacity>
            </View>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactum:{
    fontSize: 15,
    
  },
  contactName:{
    fontSize: 20,
    lineHeight: 40
  },
  row:{
    flex:1,
    paddingVertical:25,
    paddingHorizontal:50,
    flexDirection:'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});