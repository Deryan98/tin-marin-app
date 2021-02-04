import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

/**
 * Tarjeta utilizada para mostrar la información de la pantalla Contacto.
 * @param {string} charge - Cadena que almacena el cargo que tiene cada contacto del museo.
 * @param {style} color - Cambia el color del fondo del titulo de nuestra tarjeta.
 * @param {string} name - Cadena que almacena el nombre de los contactos.
 * @param {string} email - Cadena que almacena el email de los contactos.
 * @see https://reactnative.dev/docs/text
 * @see https://reactnative.dev/docs/safeareaview
 * @return {SafeAreaView} - Retorna un layout cuyos limites se encuentran en un area segura.
 */

const GenericCard = ({ charge, color, name, email }) => {
  return (
    <SafeAreaView style={styles.card}>
      <View style={[styles.tituloView, { backgroundColor: color }]}>
        <Text style={styles.titulo}>{charge}</Text>
      </View>
      <View style={styles.viewCard}>
        <Text style={styles.subTitulo}>{name}</Text>
        <Text style={styles.subTitulo}>{email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default GenericCard;

/**
 * @ignore
 */
const styles = StyleSheet.create({
  card: {
    // marginBottom: 40,
    marginTop: 20,
    width: '100%',
  },
  viewCard: {
    borderColor: '#d1d3e2',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 100,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  tituloView: {
    borderColor: '#d1d3e2',
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  titulo: { fontSize: 19, color: '#fff', fontWeight: 'bold' },
  subTitulo: { fontSize: 19, color: '#858796', fontWeight: 'normal' },
});
