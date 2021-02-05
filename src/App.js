import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ModalPortal } from 'react-native-modals';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

DefaultTheme.colors.text = '#FFF';
/**
 * Función principal que se encarga de levantar toda la aplicación.
 * @return {Component} Nodo padre que contiene toda la applicación.
 * @see https://callstack.github.io/react-native-paper/index.html
 * @see https://reactnavigation.org/docs/getting-started/
 */
const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <MainNavigator />
        <ModalPortal />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
