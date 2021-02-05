import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerContent from './DrawerContent';

/**
 * Se encarga de crear el menu lateral izquierd, que se llama NavigationDrawer
 */
const Drawer = createDrawerNavigator();

/**
 * Este archivo crea e inicia el menu lateral izquierdo
 * @property {function} MainNavigator - Este metodo se encarga de iniciar el NavigationDrawer, el cual recoge la informacion de las pantallas contenida en el StackNavigation
 * @see https://reactnavigation.org/docs/drawer-based-navigation/
 * @return {Drawer.Navigator} Retorna el objeto Drawer.Navigator el cual es el menu lateral izquierdo que se mostrara en pantalla
 */
export default MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="app"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="app" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

