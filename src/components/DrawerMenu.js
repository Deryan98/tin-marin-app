import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

/**
 * Menu desplegable que se muestra a un costado, al presionar el boton respectivo en la pantalla principal.
 * @param {*} props - Componentes a los que se les aplica personalizacion.
 * @see https://reactnative.dev/docs/props 
 */
export const DrawerMenu = (props) => {
  return (
    <Icon
      name="menu"
      type="material-community"
      size={30}
      color="black"
      onPress={props.onPress}
      containerStyle={styles.containerStyle}
    />
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  containerStyle: {flexDirection: 'row', marginLeft: 10},
});
