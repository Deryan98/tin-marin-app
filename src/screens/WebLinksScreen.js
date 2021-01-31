import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';
import { getAllLinks } from '../api/weblinks';
import { LogBox } from 'react-native';
import { size } from 'lodash';

LogBox.ignoreAllLogs();

/**
 * Pantalla que muestra la lista de Sitios de Interés.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {Array<Object>} links - Lista que contiene Objetos con estructura de un Sitios de Interés.
 * @property {function} setlinks - Método de acceso indirecto para modificar la propieadad links.
 * @property {boolean} loading - Variable auxiliar para indicar si ya hay respuesta del servidor para cargar la vista que contiene.
 * @property {function} setLoading - Método de acceso indirecto para modificar la propieadad loading.
 * @property {boolean} fetched - Variable auxiliar para validar el tiempo de respuesta de una promesa.
 * @property {function} setFetched - Método de acceso indirecto para modificar la propieadad fetched.
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @property {Promise} getAllLinks - {@link getAllLinks} | Promesa que devuelve la información dependiendo la respuesta del servidor.
 * @property {AbortController} abortController - Patrón de diseño que se implementa para validar promesas.
 * @property {AbortSignal} signal - Objeto que se comunica con abortController en caso una promesa falle.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactjs.org/docs/hooks-effect.html
 * @see https://reactjs.org/docs/hooks-state.html
 * @seee https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
 * @experimental La promesa getAllLinks presenta un fallo de múltiples llamadas asíncronas.
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const WebLinksScreen = ({ navigation }) => {
  const [links, setlinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getAllLinks(signal).then((response) => {
      setlinks(response);
      setLoading(false);
      setFetched(true);
    });

    if (fetched) abortController.abort();
  });
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: 200,
          }}
          size="large"
          color="#0000ff"
        />
      ) : size(links) == 0 ? (
        <Text style={styles.text}>No se encontraron Sitios de Interés</Text>
      ) : (
        <View style={styles.view}>
          <Text style={styles.title}>Sitios de Interes</Text>
          <View style={styles.line}></View>
          {links.map((link, key) => (
            <BasicCard
              key={key}
              imageURL={link.image}
              title={link.title}
              color={Colors.magenta}
              url={link.url}
              textBtn="Saber Mas"
            />
          ))}
        </View>
      )}
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
    paddingBottom: 30,
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

export default WebLinksScreen;
