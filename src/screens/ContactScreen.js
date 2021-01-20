import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ContactCard from '../components/ContactCard';
import Colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import {CONTACTS} from '../dummy-data/contacts'


const ContactScreen = ({ navigation }) => {
  const [contactEmail, setContactEmail] = useState('cambialo');
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
          <Text style={styles.title}>Información de Contactos</Text>
          <View style={styles.line}></View>
          <Picker
                style={{ height: 50, width: 250, textAlign: 'center'}}
                mode = "dropdown"
                selectedValue={contactEmail}  
                onValueChange={(itemValue, itemPosition) =>  {
                  setContactEmail(itemValue)
                }}  
            >
              {
                CONTACTS.map((contact) => (
                  <Picker.Item label={contact.charge} value={contact.email} /> 
                ))
              }
            </Picker>
            {CONTACTS.map((contact) => (contact.email === contactEmail && 
            <ContactCard
            charge={contact.charge}
            color={Colors.blueColor}
            name={contact.name}
            email= {contact.email}
          />
            ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
        view: {
        flexDirection: 'column',
    alignItems: 'center',
  },
  title:{
        marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold'

  },
  line:{
        height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC'
  }
});

export default ContactScreen;
