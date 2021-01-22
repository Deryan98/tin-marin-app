import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ContactCard from '../components/ContactCard';
import SugerenceCard from '../components/SugerenceCard';
import Colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { CONTACTS } from '../dummy-data/contacts'
import { getAllSuperenceTypes } from '../api/sugerences'


const SugerenceScreen = ({ navigation }) => {
  const [contactEmail, setContactEmail] = useState('cambialo');
  // OBTIENE DATA, ES UNA COLLECCION
  const [sugerenceTypes, setSugerenceTypes] = useState([]);
  //GUARDA EN FORMULARIO ES UNICA
  const [sugerenceType, setSugerenceType] = useState('ELIJA UNA OPCION');

  useEffect(() => {
    getAllSuperenceTypes().then((response) => {
      setSugerenceTypes(response);
      console.log(response);
    })
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
        <Text style={styles.title}>Sugerencias O Comentarios</Text>
        <View style={styles.line}>
        </View>
        <View style={styles.containerlogo}><Image style={styles.Logo} source={{ uri: 'https://tinmarin.org/wp-content/uploads/2020/04/logo-tm-con-marco-blanco.png', }} /></View>
        <Picker
          style={{ height: 50, width: 250, textAlign: 'center' }}
          mode="dropdown"
          selectedValue={sugerenceType}
          onValueChange={(itemValue, itemPosition) => {
            setSugerenceType(itemValue)
          }}
        >
          {
            sugerenceTypes.map((sugerenceType, key) => (
              <Picker.Item key={key} label={sugerenceType.name} value={sugerenceType.name} />
            ))
          }
        </Picker>

      </View>
      <SugerenceCard
        sugerenceType={sugerenceType}
        color={Colors.blueColor}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  line: {
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

export default SugerenceScreen;
