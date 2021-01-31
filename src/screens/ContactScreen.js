import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ContactCard from '../components/ContactCard';
import Colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { CONTACTS } from '../dummy-data/contacts';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

/**
 * Pantalla que muestra información de contacto de los trabajadores de la entidad.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {string} contactEmail - Email de un contacto, cambia su valor dependiendo el valor que se seleccione en el componente Picker
 * @property {function} setContactEmail - Método de acceso indirecto para modificar la propieadad contactEmail.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @property {Array<Object>} CONTACTS - Arreglo que contiene información estática de los contactos Tin Marín.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://github.com/react-native-picker/picker
 * @see https://reactjs.org/docs/hooks-state.html
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const ContactScreen = ({ navigation }) => {
  const [contactEmail, setContactEmail] = useState('');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
        <Text style={styles.title}>Información de Contactos</Text>
        <View style={styles.line}></View>
        <View style={styles.containerlogo}>
          <Image
            style={styles.Logo}
            source={require('../assets/logoTinMarin.png')}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={contactEmail}
            onValueChange={(itemValue, itemPosition) => {
              setContactEmail(itemValue);
            }}>
            <Picker.Item label="Seleccione un contacto" value="" />
            {CONTACTS.map((contact, key) => (
              <Picker.Item
                key={key}
                label={contact.charge}
                value={contact.email}
              />
            ))}
          </Picker>
        </View>
        {CONTACTS.map(
          (contact, key) =>
            contact.email === contactEmail && (
              <ContactCard
                key={key}
                charge={contact.charge}
                color={Colors.blueColor}
                name={contact.name}
                email={contact.email}
              />
            ),
        )}

        <View style={styles.redes_sociales}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.facebook.com/MuseoTinMarin/')
            }>
            <Image
              style={styles.minilogo}
              source={require('../assets/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.instagram.com/museotinmarin/')
            }>
            <Image
              style={styles.minilogo}
              source={require('../assets/instagram.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://twitter.com/MuseoTinMarin')
            }>
            <Image
              style={styles.minilogo}
              source={require('../assets/twitter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/channel/UCdpMf5DQvZlcjfX4wum4LmQ',
              )
            }>
            <Image
              style={styles.minilogo}
              source={require('../assets/youtube.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d1d3e2',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#858796',
    color: 'white',
  },
  redes_sociales: {
    marginTop: 10,
    justifyContent: 'center',
    width: 100,
    flexDirection: 'row',
    marginBottom: 50,
  },
  minilogo: {
    margin: 5,
    height: 60,
    width: 60,
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 30,
    color: '#566573',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  Logo: {
    width: 300,
    height: 200,
  },
  containerlogo: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    padding: 24,
  },
});

export default ContactScreen;
