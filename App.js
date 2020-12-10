import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './navigation/MainNavigator';
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper
} from "react-native-paper";


const App = () => {
  return (
  <PaperProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
