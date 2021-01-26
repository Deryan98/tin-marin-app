import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ContactCard from '../components/ContactCard';
import Colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import {CONTACTS} from '../dummy-data/contacts'


const ContactScreen = ({ navigation }) => {
  const [contactEmail, setContactEmail] = useState('cambialo');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
          <Text style={styles.title}>Información de Contactos</Text>
          <View style={styles.line}></View>
          <View style={styles.containerlogo}><Image style={styles.Logo} source={{ uri: 'https://tinmarin.org/wp-content/uploads/2020/04/logo-tm-con-marco-blanco.png', }} /></View>
          <Picker
                style={{ height: 50, width: 250, textAlign: 'center'}}
                mode = "dropdown"
                selectedValue={contactEmail}  
                onValueChange={(itemValue, itemPosition) =>  {
                  setContactEmail(itemValue)
                }}  
            >
              {
                CONTACTS.map((contact,key) => (
                  <Picker.Item 
                  key={key} 
                  label={contact.charge} 
                  value={contact.email} /> 
                ))
              }
            </Picker>
            {CONTACTS.map((contact, key) => (contact.email === contactEmail && 
            <ContactCard 
            key = {key}
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
    fontFamily: 'NunitoSans-Bold',
    fontSize: 30,
    color: '#566573',
  },
  line:{
        height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC'
  },
  Logo: {
    width: 200,
    height: 200
  },
  containerlogo: {
    alignItems: 'center',
    //backgroundColor: "#ffffff",
    padding: 15,
    fontFamily: 'NunitoSans-Bold'
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff"
  },
});

export default ContactScreen;
