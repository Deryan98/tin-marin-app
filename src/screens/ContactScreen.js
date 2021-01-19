import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContactCard from '../components/ContactCard';
import Colors from '../constants/Colors';


const ContactScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
          <Text style={styles.title}>Información de Contactos</Text>
          <View style={styles.line}></View>
            <ContactCard
            charge="Visita Famiiar"
            color={Colors.blueColor}
            name="Karla Lemus"
            email="correodeprueba@correo.com"
          />

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
