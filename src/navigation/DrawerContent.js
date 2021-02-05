import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Avatar } from 'react-native-paper';
import {
  playButtonPress,
} from '../helpers/audio'
import Colors from '../constants/Colors';

/**
 * Archivo que crea los botones del menu lateral izquierdo, con sus respetivos nombre e iconos.
 * @param {prop} props - Es un objeto del cual, en este caso se extrae la propiedad "navigation", que contendra la informacion de las pantallas que tiene la app
 * @property {function} DrawerContent - Esta funcion se encarga de enviarle al DrawerNavigatod los iconos y titulos que tendran los botones del menu lateral izquierdo, tambien se encarga de indicar a que pantalla esta navegando al momento de presionar alguno de los botones
 * @see https://reactnavigation.org/docs/drawer-navigator/
 * @return {DrawerContentScrollView} Almacena todos los botones y se encarga de mostralos en pantalla.
 */
const DrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView style={styles.drawer}>
      <Drawer.Section style={styles.image}>
        <Avatar.Image
          backgroundColor={'#4E73DF'}
          size={100}
          source={require('../assets/logoDrawer.png')}
        />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item
          label="Menu Principal"
          onPress={() => navigation.navigate('home')}
          icon="home"
        />
        <Drawer.Item
          label="Exhibiciones"
          onPress={() =>{playButtonPress, navigation.navigate('exhibits')} }
          icon="ticket"
        />
        {/* <Drawer.Item
                    label="Eventos"
                    onPress={()=> navigation.navigate("events")}
                    icon="gift"
                /> */}
        <Drawer.Item
          label="Recomendaciones Covid-19"
          onPress={() => navigation.navigate('covid')}
          icon="virus"
        />
        <Drawer.Item
          label="Conócenos Más"
          onPress={() => navigation.navigate('knowMore')}
          icon="card-account-mail"
        />
        <Drawer.Item
          label="Sugerencias"
          onPress={() => navigation.navigate('comments')}
          icon="email-alert"
        />
        {/* <Drawer.Item
          label="Donaciones"
          onPress={() => navigation.navigate('donations')}
          icon="heart"
        /> */}
        <Drawer.Item
          label="Preguntas Frecuentes"
          onPress={() => navigation.navigate('FAQs')}
          icon="frequently-asked-questions"
        />
        <Drawer.Item
          label="Sitios de Interés"
          onPress={() => navigation.navigate('WebLinks')}
          icon="web"
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    backgroundColor: '#4E73DF',
  },
  second: {
    color: '#860472',
  },
  drawer: {
    backgroundColor: Colors.primaryColor,
    color: '#FFF',
  },
});

export default DrawerContent;
