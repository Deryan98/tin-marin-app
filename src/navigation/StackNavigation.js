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

const Stack = createStackNavigator();
export default function StackNavigation(props) {
  const { navigation } = props;

  const buttonLeft = (screen = 'not') => {
    if (screen == 'information')
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
