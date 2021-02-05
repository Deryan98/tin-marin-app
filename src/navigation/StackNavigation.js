import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import ExhibitsScrn from '../screens/ExhibitsScreen';
import EventsScreen from '../screens/EventsScreen';
import CovidScreen from '../screens/CovidScreen';
import ContactScreen from '../screens/ContactScreen';
import SugerenceScreen from '../screens/SugerenceScreen';
import DonationScreen from '../screens/DonationScreen';
import InfoCard from '../screens/InfoCard';
import KnowMoreScreen from '../screens/KnowMoreScreen';
import MissionAndVisionScreen from '../screens/MissionAndVisionScreen';
import Search from '../screens/Search';
import FAQScreen from '../screens/FAQScreen';
import WebLinksScreen from '../screens/WebLinksScreen';
import CovidInfo from '../screens/CovidInfo';

/**
 * Crea el StackNavigator
*/
 const Stack = createStackNavigator();

/**
 * Este archivo permite a la aplicacion identificar todas las pantallas con las que cuenta la app, para poder navegar entre las diferentes pantallas. Ademas tambien permite que se despliegue el menu lateral izquierdo y el boton de busqueda en la pantalla de exhibiciones.
 * @param {prop} props - Es un objeto del cual, en este caso se extrae la propiedad "navigation", que contendra la informacion de las pantallas que tiene la app
 * @property {function} buttonLeft - Se utiliza para detectar el click en el boton "buscar", encontrado en la pantalla de exhibiciones, para poder realizar una busqueda
 * @property {function} buttonRight - Metodo que permite detectar el click en la parte superior izquierda de la pantalla, para desplegar el menu lateral izquierdo
 * @see https://reactnavigation.org/docs/stack-navigator/
 * @return {Stack.Navigator} Retorna el objeto Stack.Navigator que reconoce las pantallas que se agreguen con Stack.Screen
 */
export default function StackNavigation(props) {
  const { navigation } = props;

  const buttonLeft = (screen = 'not') => {
    if (screen == 'information' || screen == 'search' || screen == 'FAQs')
      return (
        <IconButton
          icon="arrow-left"
          onPress={() => navigation.goBack()}
          color="#FFF"
        />
      );
    return (
      <IconButton
        icon="menu"
        onPress={() => navigation.openDrawer()}
        color="#4E73DF"
      />
    );
  };

  const buttonRight = () => {
    return (
      <IconButton
        icon="magnify"
        onPress={() => navigation.navigate('search')}
        color="#4E73DF"
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="exhibits"
        component={ExhibitsScrn}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="events"
        component={EventsScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="covid"
        component={CovidScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="contact"
        component={ContactScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="comments"
        component={SugerenceScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="donations"
        component={DonationScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="information"
        component={InfoCard}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => buttonLeft('information'),
        }}
      />
      <Stack.Screen
        name="knowMore"
        component={KnowMoreScreen}
        options={{
          title: '',
          headerTransparent: false,
          headerLeft: () => buttonLeft('knowMore'),
        }}
      />
      <Stack.Screen
        name="missionAndVision"
        component={MissionAndVisionScreen}
        options={{
          title: '',
          headerTransparent: false,
          headerLeft: () => buttonLeft('missionAndVision'),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => buttonLeft('search'),
        }}
      />
      <Stack.Screen
        name="FAQs"
        component={FAQScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="WebLinks"
        component={WebLinksScreen}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="InfoCovid"
        component={CovidInfo}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
    </Stack.Navigator>
  );
}
/**
 * @ignore
 */
const styles = StyleSheet.create({});
