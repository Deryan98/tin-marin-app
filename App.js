import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { ModalPortal } from 'react-native-modals';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

DefaultTheme.colors.text = '#FFF';

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

// const styles = StyleSheet.create({});
