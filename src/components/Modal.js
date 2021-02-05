import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Tin from '../assets/tin.png';

/**
 * Componente que muestra el contenido del modal.
 * @param {string} curiousInfo - Dato curioso de la exhibición.
 * @return {View} Retorna un componente que contiene maquetada la vista
 */
const Modal = ({ curiousInfo }) => {
  return (
    <View style={styles.content}>
      <Image source={Tin} style={styles.img} />
      <Text style={styles.text}>{curiousInfo}</Text>
    </View>
  );
};

export default Modal;

/**
 * @ignore
 */
const styles = StyleSheet.create({
  content: {
    maxWidth: '90%',
    minWidth: '60%',
    height: 120,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: 110,
    width: 110,
    padding: 0,
    margin: 0,
  },
  text: {
    fontSize: 16.5,
    width: '63%',
    textAlign: 'left',
    paddingLeft: 10,
  },
});
