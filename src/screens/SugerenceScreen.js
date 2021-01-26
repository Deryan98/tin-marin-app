import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import SugerenceCard from '../components/SugerenceCard';
import Colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { getAllSuperenceTypes } from '../api/sugerences'


const SugerenceScreen = ({ navigation }) => {
  // OBTIENE DATA, ES UNA COLLECCION
  const [sugerenceTypes, setSugerenceTypes] = useState([]);
  //GUARDA EN FORMULARIO ES UNICA
  const [sugerenceType, setSugerenceType] = useState('ELIJA UNA OPCION');

  useEffect(() => {
    getAllSuperenceTypes().then((response) => {
      setSugerenceTypes(response);
    })
  }, [])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
        <Text style={styles.title}>Sugerencias O Comentarios</Text>
        <View style={styles.line}>
        </View>
        <View style={styles.containerlogo}><Image style={styles.Logo} source={{ uri: 'https://tinmarin.org/wp-content/uploads/2020/04/logo-tm-con-marco-blanco.png', }} /></View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={sugerenceType}
            onValueChange={(itemValue, itemPosition) => {
              setSugerenceType(itemValue)
            }}
          >
              { 
                sugerenceTypes.map((sugerenceType, key) => (
                  <Picker.Item  key={key} label={sugerenceType.name} value={sugerenceType.name} />
                ))
              }
          </Picker>
        </View>

      </View>
      <SugerenceCard
        sugerenceType={sugerenceType}
        color={Colors.blueColor}
      />
      <View style={styles.view} >
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}> Enviar! </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
  pickerItem: {
    height: 100,
    width: 500,
    width: '100%'
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74a3b',
    marginBottom: 100,
    height: 55,
    width: '60%',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'NunitoSans-Bold',
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
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
