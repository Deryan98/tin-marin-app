import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { getAllCovidRecommendations } from '../api/covid';
import { Text } from 'react-native-elements';
import GenericCard from '../components/GenericCard';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { size } from 'lodash';

/**
 * Pantalla que muestra una lista de tarjetas sobre recomendaciones sobre el COVID-19
 * @param {prop} navigation - Contiene información básica de navegación
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {SafeAreaView} Regreesa una layout con la maquetación de la pantalla
 */
const CovidScreen = ({ navigation }) => {
  // const [covidInfo, setCovidInfo] = useState(null);
  const [covid, setCovid] = useState(null);
  const [loading, setLoading] = useState(true);
  let swapColor = true;

  useEffect(() => {
    getAllCovidRecommendations().then((response) => {
      // console.log(response);
      setCovid(response);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator
            style={{
              marginTop: 200,
            }}
            size="large"
            color="#0000ff"
          />
        ) : size(covid) == 0 ? (
          <Text style={styles.text}>No se encontraron Recomendaciones</Text>
        ) : (
          <View style={styles.view}>
            <Text style={styles.title}>Recomendaciones para el Covid-19</Text>
            <View style={styles.line}></View>
            <CovidList
              covidRecs={covid}
              navigation={navigation}
              swapColor={swapColor}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Componente que se utiliza para iterar las tarjetas
 * @param {prop} navigation
 * @param {Array<string>} covidRecs - Contiene la información del estado covid.
 * @param {boolean} swapColor - Variable de control para intercambiar color.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {GenericCard} Retorna una lista de tarjetas de tipo {@link GenericCard}
 */
const CovidList = ({ navigation, covidRecs, swapColor }) => {
  return covidRecs.map((covid, index) => {
    if (index % 2 === 0) swapColor = !swapColor;
    return (
      <GenericCard
        key={index}
        id={covid._id}
        title={covid.title}
        description={covid.description}
        imageURL={covid.image}
        steps={covid.steps}
        color={swapColor ? Colors.green : Colors.magenta}
        textBtn="Saber Más"
        navigation={navigation}
        screenName="InfoCovid"
      />
    );
  });
};

export default CovidScreen;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    textAlign: 'center',
  },

  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
});
