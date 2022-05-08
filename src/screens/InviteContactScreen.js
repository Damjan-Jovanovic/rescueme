import React, { useEffect, useState} from 'react';
import * as Contacts from 'expo-contacts';
import { StyleSheet, View, Text, FlatList,TouchableOpacity } from 'react-native'

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

  return (
    <View style={styles.container}>
      <FlatList
      /*style={{width: '80%'}}*/
        keyExtractor={(item,index) => item.id.toString()} 
        data={contacts}
        
        initialNumToRender={Array.length}
        renderItem={({item, index}) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactum}> {item.phoneNumbers ? item.phoneNumbers[0].number : ''}</Text>
            </TouchableOpacity>
          </View>
          )
        }}
      />
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