import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

/**
 * Pantalla que muestra la misión y visión de la entidad.
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const MissionAndVisionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.titular}>Misión, Visión y Valores</Text>
        <View style={styles.line}></View>
        <View style={styles.containerlogo}>
          <Image
            style={styles.Logo}
            source={require('../assets/logoTinMarin.png')}
          />
        </View>
        <Text style={styles.tema}>Misión:</Text>
        <Text style={styles.title2}>
          Contribuir a la formación de los niños y sus acompañantes en
          ciudadanos integrales y creativos, mediante el aprendizaje
          significativo, la orientación cultural y la experimentración divertida
          con integridad, innovación y trabajo en equipo.
        </Text>
        <Text style={styles.tema}>Visión:</Text>
        <Text style={styles.title2}>
          Ser el espacio favorito, cultural y divertido de los niños para
          aprender y disfrutar de experiencias únicas, emocionantes e
          inolvidables; y ser mejores protagonistas de su desarrollo a nivel
          personal, escolar y social.
        </Text>
        <Text style={styles.tema}>Valores:</Text>
        <Text style={styles.title}>
          Innovación{'\n'}
          Integridad{'\n'}
          Lealtad{'\n'}
          Respeto{'\n'}
          Trabajo en equipo{'\n'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MissionAndVisionScreen;

/**
 *@ignore
 */
const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  container: {
    flex: 1,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title2: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    color: '#20232a',
    textAlign: 'justify',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 18,
  },
  tema: {
    marginTop: 13,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 24,
    color: '#B22222',
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
  titular: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
