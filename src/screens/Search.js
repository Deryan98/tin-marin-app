import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { map, size } from 'lodash';
import { getExhibitionByName } from '../api/exhibitions';
import Card from '../components/Card';
import Colors from '../constants/Colors';

/**
 * Pantalla que muestra una lista de tarjetas con enlaces a pantallas para conocer más sobre Tin Marín.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {Promise} getExhibitionByName - {@link getExhibitionByName} | Promesa que devuelve la información dependiendo la respuesta del servidor.
 * @property {boolean} search - Variable auxiliar que almacena el texto escribo en la barra de busqueda.
 * @property {function} setSearch - Método de acceso indirecto para modificar la propieadad search.
 * @property {Object} exhibition - Objeto que contiene la estructura de una Exhibición.
 * @property {function} setExhibition - Método de acceso indirecto para modificar la propieadad exhibition.
 * @property {boolean} loading - Variable auxiliar que indica si la busqueda se ha completado o no.
 * @property {function} setLoading - Método de acceso indirecto para modificar la propieadad loading.
 * @property {boolean} swapColor - Variable auxiliar para cambiar color de tarjetas cada posición: (índice mod 2).
 * @listens {onChange} | El método onChangeSearch se dispara cuando ocurre este evento en un componente <SearchBar>.
 * @property {function} size - Función de la librería lodash | Devuelve el tamaño de una colección.
 * @property {function} map - Función de la librería lodash | Crea un arreglo de valores a partir de cada elemento de una colección.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://lodash.com/docs/4.17.15#size
 * @see https://lodash.com/docs/4.17.15#map
 * @see https://callstack.github.io/react-native-paper/searchbar.html
 * @return {SafeAreaView} Retorna un componente que contiene maquetada la vista
 */
const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [exhibitions, setExhibitions] = useState(null);
  const [loading, setLoading] = useState(true);
  let swapColor = true;

  useEffect(() => {
    if (size(search) >= 0) {
      getExhibitionByName(search).then((response) => {
        setExhibitions(response);
        setLoading(false);
      });
    }
  }, [search]);

  const onChangeSearch = (e) => {
    if (size(e) > 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    setSearch(e);
  };

  return (
    <SafeAreaView style={styles.view}>
      <Searchbar
        placeholder="Buscar tu exhibición"
        iconColor="#4E73DF"
        icon="arrow-left"
        style={styles.input}
        inputStyle={{ color: '#000' }}
        onChangeText={onChangeSearch}
      />
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
          <Text style={styles.text}>No se encontraron exhibiciones</Text>
        ) : (
          <View style={styles.container}>
            {map(exhibitions, (exhibition, index) => {
              if (index % 2 == 0) {
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
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    marginTop: -3,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  view: {
    marginBottom: 50,
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
});
