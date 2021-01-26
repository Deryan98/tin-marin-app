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

const Stack = createStackNavigator();
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

const styles = StyleSheet.create({});
