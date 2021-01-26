import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

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
            console.log(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default GenericCard;

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
