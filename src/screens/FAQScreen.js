import { map } from 'lodash';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { getAllFAQs } from '../api/faqs';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import Colors from '../constants/Colors';
import { size } from 'lodash';

/**
 * Pantalla que muestra una lista de tarjetas con preguntas frecuentes.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {Array<Object>} faqs - Lista que contiene Objetos con estructura de una Pregunta Frecuente.
 * @property {function} setFaqs - Método de acceso indirecto para modificar la propieadad faqs.
 * @property {boolean} loading - Variable auxiliar para indicar si ya hay respuesta del servidor para cargar la vista que contiene.
 * @property {function} setLoading - Método de acceso indirecto para modificar la propieadad loading.
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @property {Promise} getAllFAQs - {@link getAllFAQs} | Promesa que devuelve la información dependiendo la respuesta del servidor.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactjs.org/docs/hooks-effect.html
 * @see https://reactjs.org/docs/hooks-state.html
 * @see @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @return {SafeAreaView} Regreesa una layout con la maquetación de la pantalla
 */
const FAQScreen = ({ navigation }) => {
  const [faqs, setFaqs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllFAQs().then((response) => {
      setFaqs(response);
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
        ) : size(faqs) == 0 ? (
          <Text style={styles.text}>
            No se encontraron Preguntas Frecuentes
          </Text>
        ) : (
          <View style={styles.view}>
            <Text style={styles.title}>Preguntas Frecuentes</Text>
            <View style={styles.line}></View>
            {faqs.map((faq, index) => {
              return (
                <Card key={index} containerStyle={{ borderRadius: 15 }}>
                  <Card.Title style={styles.card_title}>
                    {faq.question}
                  </Card.Title>
                  <View>
                    <Text style={styles.paragraph}>{faq.answer}</Text>
                  </View>
                </Card>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
  },
  paragraph: {
    fontFamily: 'NunitoSans-Bold',
    // marginVertical: 10,
    textAlign: 'justify',
    marginBottom: 10,
    fontSize: 15,
  },
  card_title: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'justify',
    backgroundColor: Colors.primaryColor,
    color: 'white',
    marginTop: -15,
    marginHorizontal: -16,
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
export default FAQScreen;
