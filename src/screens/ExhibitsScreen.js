import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getAllExhibitions } from '../api/exhibitions';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { size } from 'lodash';

/**
 * Pantalla que muestra una lista de tarjetas sobre las Exhibiciones
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {Array<Object>} exhibitions - Lista que contiene Objetos con estructura de una Recomendación Covid-19.
 * @property {function} setExhibitions - Método de acceso indirecto para modificar la propieadad covid.
 * @property {boolean} loading - Variable auxiliar para indicar si ya hay respuesta del servidor para cargar la vista que contiene.
 * @property {function} setLoading - Método de acceso indirecto para modificar la propieadad loading.
 * @property {boolean} swapColor - Variable auxiliar para cambiar color de tarjetas cada posición: (índice mod 2).
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {Promise} getAllExhibitions - {@link getAllExhibitions} | Promesa que devuelve la información dependiendo la respuesta del servidor.
 * @property {function} size - Función de la librería lodash | Devuelve el tamaño de una colección.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactjs.org/docs/hooks-effect.html
 * @see https://lodash.com/docs/4.17.15#size
 * @see https://reactjs.org/docs/hooks-state.html
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const ExhibitsScreen = ({ navigation }) => {
  const [exhibitions, setExhibitions] = useState(null);
  const [loading, setLoading] = useState(true);
  let swapColor = true;

  useEffect(() => {
    getAllExhibitions().then((response) => {
      setExhibitions(response);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: 200,
          }}
          size="large"
          color="#0000ff"
        />
      ) : size(exhibitions) == 0 ? (
        <Text style={styles.text}>No se encontraron Exhibiciones</Text>
      ) : (
        <View style={styles.view}>
          <Text style={styles.title}>Exhibiciones</Text>
          <View style={styles.line}></View>
          {map(exhibitions, (exhibition, index) => {
            if (index % 2 === 0) {
              swapColor = !swapColor;
            }
            return (
              <Card
                key={exhibition._id}
                index={index}
                textBtn="Conócela"
                color={swapColor ? Colors.green : Colors.magenta}
                exhibition={exhibition}
                navigation={navigation}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

/**
 *@ignore
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

export default ExhibitsScreen;
