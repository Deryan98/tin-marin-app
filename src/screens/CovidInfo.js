import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Card, Icon, Text } from 'react-native-elements';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { coinButton } from '../helpers/audio';

/**
 * Pantalla que muestra los detalles de una recomendación para prevenir COVID-19
 * @param {prop} navigation - Contiene información básica de navegación
 * @param {prop} route - Recibe parametros importantes para mostrar en pantalla
 * @param {string} title - Describe el título de una recomendación.
 * @param {Array<string>} description - Contiene un arreglo de párrafos.
 * @param {string} image - Contiene la imagen relacionada con la recomendación.
 * @param {Array<string>} steps - Contiene un arreglo con los pasos a seguir.
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @see https://reactnavigation.org/docs/route-prop/
 * @return {SafeAreaView} Retorna un componente que contiene maquetada la vista
 */
const CovidInfo = ({ navigation, route }) => {
  const { title, description, image, steps } = route.params;

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.line}></View>
          <MainParagraph description={description} />
          <RenderImage url={image} />
          <Text style={styles.subtitle}>Recomendaciones a Seguir</Text>
          <FollowSteps steps={steps} />
          <Footer navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Este componente muestra el párrafo principal que contiene la descripción
 * de una recomendación.
 * Se llama en la pantalla {@link CovidInfo}.
 * @param {Array<string>} description - Contiene una lista de tipo string con la descripción
 * @return {View} Devuelve una vista con los párrafos iterados en un componente <Text>
 */
export const MainParagraph = ({ description }) => {
  return (
    <View style={styles.view}>
      {description.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>{`${paragraph}\n`}</Text>
      ))}
    </View>
  );
};

/**
 * Este componente se encarga de Renderizar una imagen.
 * Se llama en la pantalla {@link CovidInfo}.
 * @param {string} url - Contiene la url de una imagen a mostrar.
 * @return {View} Retorna una vista con la imagen cargada.
 */
export const RenderImage = ({ url }) => {
  return (
    <View style={{ ...styles.imageContainer }}>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
};

/**
 * Componente que muestra los pasos principales para seguir una recomendación.
 * Se llama en la pantalla {@link CovidInfo}.
 * @param {Array<string>} steps - contiene una lista de tipo string con la información de recomenadaciones a seguir.
 * @return {Card} Devuelve una tarjeta con el listado de recomendaciones a seguir.
 */
export const FollowSteps = ({ steps }) => {
  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <Card.Title style={styles.card_title}>
        A continuación se muestran las siguientes indicaciones:
      </Card.Title>
      <View>
        {steps.map((step, index) => (
          <View key={index}>
            <Text style={{ ...styles.paragraph }}>{`\u2022 ${step}`}</Text>
            <Card.Divider />
          </View>
        ))}
      </View>
    </Card>
  );
};

/**
 * Componente que muestra un pie de página.
 * Se llama en la pantalla {@link CovidInfo}.
 * @param {prop} navigation
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {View} Devuelve una vista con Enlaces
 */
export const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <FooterLinks
        text="Preguntas Frecuentes"
        name="question-circle"
        color="darkturquoise"
        size={75}
        navigation={navigation}
        screenRouteName="FAQs"
      />
      <FooterLinks
        text="Sitios de Interes"
        name="exclamation-circle"
        color="green"
        size={75}
        navigation={navigation}
        screenRouteName="WebLinks"
      />
    </View>
  );
};

/**
 * Componente para mostrar un Enlace del pie de página que al presionarlo dirige a otra pantalla.
 * Se llama en el componente {@link Footer}.
 * @param {string} name - Nombre del Icono a mostrar.
 * @param {string} color - Color del Icono a mostrar.
 * @param {number} size - Tamaño del Icono.
 * @param {string} text - Texto a mostrar del enlace.
 * @param {string} screenRouteName - Nombre de la pantalla a la cuál se navegará.
 * @param {prop} navigation
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {TouchableOpacity} Devuelve una vista presionable
 */
export const FooterLinks = ({
  navigation,
  name,
  color,
  size,
  text,
  screenRouteName,
}) => {
  return (
    <TouchableOpacity
      style={{ borderRadius: 15 }}
      onPressIn={coinButton}
      onPress={() => {
        navigation.navigate(screenRouteName);
      }}>
      <View style={styles.footer_column}>
        <Icon
          name={name}
          type="font-awesome-5"
          solid
          color={color}
          size={size}
        />
        <Text style={styles.footer_links}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CovidInfo;

/**
 * @ignore
 */
const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
  },
  paragraph: {
    fontFamily: 'NunitoSans-Bold',
    marginVertical: 10,
    textAlign: 'justify',
    marginBottom: 10,
    fontSize: 15,
  },
  imageContainer: {
    width: '95%',
    height: 200,
  },
  image: { width: '100%', height: 200, borderRadius: 15 },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
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
  footer: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer_column: {
    width: Dimensions.get('window').width / 2,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer_links: {
    // padding: 10,
    fontSize: Dimensions.get('window').width > 400 ? 15 : 12,
    color: Colors.primaryColor,
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  ul: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 15,
  },
});
