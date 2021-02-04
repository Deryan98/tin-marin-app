import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { coinButton } from '../helpers/audio';


/**
 * Tarjeta utilizada por la pantalla Covid-19, para mostrar las opciones en dicho apartado.
 * @param {prop} navigation - Contiene información básica de navegación.
 * @param {string} id - Contiene en una cadena de texto el id.
 * @param {string} title - Contiene en una cadena de texto el titulo.
 * @param {string} description - Se almacena en una cadena la descripción.
 * @param {image} imageURL - Componente que muestra imagen en pantalla.
 * @param {style} color - Cambia el color del fondo del titulo de nuestra tarjeta.
 * @param {string} textBtn - Cadena de texto que almacena el nombre que tendra el boton de la tarjeta.
 * @param {string} screenName - Cadena que almacena el nombre de la pantalla.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactnative.dev/docs/image
 * @see https://reactnative.dev/docs/text
 * @return {SafeAreaView} - Retorna un layout cuyos limites se encuentran en un area segura.
 */
const KnoMoreCard = ({
  id,
  title,
  description,
  imageURL,
  steps,
  color,
  textBtn,
  navigation,
  screenName,
}) => {
  const navigating = () => {
    navigation.navigate(screenName, {
      id: id,
      title: title,
      description: description,
      image: imageURL,
      steps: steps,
    });
  };

  return (
    <SafeAreaView style={styles.card}>
      <View style={[styles.tituloView, { backgroundColor: color }]}>
        <Text style={styles.titulo}>{title}</Text>
      </View>
      <Image source={(imageURL)} style={styles.img} />
      <View style={styles.viewCard}>
        <View style={[styles.button, { backgroundColor: color }]}>
          <TouchableOpacity style={styles.opacity} onPressIn={coinButton} onPress={() => navigating()}>
            <Text style={styles.buttonText}>{textBtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KnoMoreCard;

/**
 * @ignore
 */
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 40,
    marginTop: 20,
    width: '90%',
    height: Dimensions.get('window').height / 3.4,
  },
  viewCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tituloView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  titulo: { fontSize: 19, color: '#fff', fontWeight: 'bold' },
  button: {
    paddingVertical: 7,
    borderRadius: 10,
    width: '35%',
    opacity: 0.8,
    height: 40,
    marginTop: -60,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    opacity: 1,
  },
  img: {
    width: '100%',
    height: '90%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
