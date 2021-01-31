import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SugerenceCard from '../components/SugerenceCard';
import Colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { getAllSuperenceTypes, storeSugerence } from '../api/sugerences';

/**
 * Pantalla que muestra el formulario de sugerencias, para poder enviar un mensaje a la entidad.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {Array<Object>} sugerenceTypes - Lista que contiene Objetos con estructura de un Tipo de Sugerencia.
 * @property {function} setSugerenceTypes - Método de acceso indirecto para modificar la propieadad sugerenceTypes.
 * @property {string} sugerenceType - Variable que guarda el tipo de sugerencia que seleccione un Usuario.
 * @property {function} setSugerenceType - Método de acceso indirecto para modificar la propieadad sugerenceType.
 * @property {string} comment - Variable que guarda el comentario que desea realizar un Usuario.
 * @property {function} setComment - Método de acceso indirecto para modificar la propieadad comment.
 * @property {string} error - Variable que contiene información de Errores cometidos por el Usuario.
 * @property {function} setError - Método de acceso indirecto para modificar la propieadad error.
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @property {Promise} getAllSuperenceTypes - {@link getAllSuperenceTypes} | Promesa que devuelve los tipos de sugerencia dependiendo la respuesta del servidor.
 * @property {Promise} storeSugerence - {@link storeSugerence} | Promesa que crea un nuevo comentario en el servidor y regresa un estatus de 201.
 * @property {function} handleComment - Método que guarda un comentario de tipo string cada vez que se presiona una tecla en la caja de comentario.
 * @property {function} handleSend - Método que valida la información del formulario y envía la información al servidor usando la promesa {@link storeSugerence} o guarda errores de validación.
 * @listens {onChangeText} | El método handleComment se dispara cuando ocurre este evento en un componente <TextInput> que almacena un comentario.
 * @listens {onPress} | El método handleSend se dispara cuando ocurre este evento en un componente <TouchableOpacity> que representa el botón Enviar.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactjs.org/docs/hooks-effect.html
 * @see https://reactjs.org/docs/hooks-state.html
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
 * @see https://reactnative.dev/docs/textinput#onchangetext
 * @see https://reactnative.dev/docs/touchableopacity
 * @see https://github.com/react-native-picker/picker/issues/209
 * @todo Validar la longitud el comentario.
 * @todo Mostrar el texto de error.
 * @todo validar promesas cuando no hay internet.
 * @experimental El componente Picker tiene limitaciones si se desea agregar estilos a Picker.Item.
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const SugerenceScreen = ({ navigation }) => {
  // OBTIENE DATA, ES UNA COLLECCION
  const [sugerenceTypes, setSugerenceTypes] = useState([]);
  //GUARDA EN FORMULARIO ES UNICA
  const [sugerenceType, setSugerenceType] = useState('');

  const [comment, setComment] = useState('');

  const [error, setError] = useState('');

  useEffect(() => {
    getAllSuperenceTypes().then((response) => {
      setSugerenceTypes(response);
    });
  }, []);

  const handleComment = (comment) => {
    // console.log(`Guardando texto: ${comment}`);
    setComment(comment);
  };

  const handleSend = () => {
    if (comment === '' || sugerenceType === '') {
      setError('Por favor, Ingrese un mensaje');
      // console.log(sugerenceType);
    } else {
      storeSugerence(sugerenceType, comment).then((response) => {
        // console.log(`Respuesta del server: ${response.status}`);
        Alert.alert('Se envió tu Sugerencia con Éxito!!!');
        setComment('');
      });
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
        <Text style={styles.title}>Sugerencias O Comentarios</Text>
        <View style={styles.line}></View>
        <View style={styles.containerlogo}>
          <Image
            style={styles.Logo}
            source={require('../assets/logoTinMarin.png')}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={sugerenceType}
            onValueChange={(itemValue, itemPosition) => {
              setSugerenceType(itemValue);
            }}>
            {sugerenceTypes.map((sugerenceType, key) => (
              <Picker.Item
                key={key}
                label={sugerenceType.name}
                value={sugerenceType.name}
              />
            ))}
          </Picker>
        </View>
      </View>
      <SugerenceCard
        sugerenceType={sugerenceType}
        color={Colors.blueColor}
        comment={comment}
        onCommentChange={handleComment}
      />
      <View style={styles.view}>
        <TouchableOpacity onPress={() => handleSend()} style={styles.button}>
          <Text style={styles.buttonText}> Enviar! </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d1d3e2',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#858796',
    color: 'white',
  },
  pickerItem: {
    height: 100,
    width: 500,
    width: '100%',
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74a3b',
    marginBottom: 100,
    height: 55,
    width: '60%',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'NunitoSans-Bold',
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
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
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
});

export default SugerenceScreen;
