import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import KnoMoreCard from '../components/KnoMoreCard';
import Colors from '../constants/Colors';
import InformacionDeContacto from '../assets/InformacionDeContacto.jpg';
import MisionVisionValores from '../assets/MisionVisionValores.jpg';

/**
 * Pantalla que muestra una lista de tarjetas con enlaces a pantallas para conocer más sobre Tin Marín.
 * @param {prop} navigation - Contiene información básica de navegación
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const KnowMoreScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
        <Text style={styles.title}>Conócenos Más</Text>
        <View style={styles.line}></View>
        <KnoMoreCard
          title="Contactos"
          imageURL={InformacionDeContacto}
          color={Colors.magenta}
          textBtn="Saber Mas"
          navigation={navigation}
          screenName="contact"
        />

        <KnoMoreCard
          title="Misión, Visión, Valores"
          imageURL={MisionVisionValores}
          color={Colors.magenta}
          textBtn="Saber Mas"
          navigation={navigation}
          screenName="missionAndVision"
        />
      </View>
    </ScrollView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
});

export default KnowMoreScreen;
