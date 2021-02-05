import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

/**
 * Tarjeta utilizada por la Sugerencias, para mostrar las opciones en dicho apartado.
 * @param {string} sugerenceType - Contiene una cadena de texto indicando el tipo de sugerencia (Mejora, Queja, Otro)
 * @param {string} color - Contiene en una cadena de texto que indica el color de la caja de comentarios
 * @param {string} comment - Contiene la sugerencia escrita por el usuario la primera vez que presiona el boton Enviar
 * @param {string} onCommentChange - Contiene la sugerencia escrita por el usuario desde la segunda y las siguientes veces que es presionado el boton Enviar
 * @param {function} GenericCard - Se encarga de crear la tarjeta utilizada para alojar la caja de sugerencias o comentarios
 * @return {SafeAreaView} - Retorna un layout cuyos limites se encuentran en un area segura.
 */
const GenericCard = ({ sugerenceType, color, comment, onCommentChange }) => {
  const handleComment = (text) => {
    onCommentChange(text);
  };

  return (
    <SafeAreaView style={styles.card}>
      <View style={[styles.tituloView, { backgroundColor: color }]}>
        <Text style={styles.titulo}>{`Comentario: ${sugerenceType}`}</Text>
      </View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Escribe tu comentario aqui"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={comment}
          onChangeText={(text) => {
            handleComment(text);
          }}
        />
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
    marginBottom: 40,
    marginTop: 20,
    width: '100%',
  },
  textAreaContainer: {
    paddingHorizontal: 10,
    width: '100%',
    borderColor: '#d1d3e2',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textArea: {
    textAlignVertical: 'top',
  },
  viewCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 100,
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
});
