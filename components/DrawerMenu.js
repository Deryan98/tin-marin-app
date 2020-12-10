import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

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

const styles = StyleSheet.create({
  containerStyle: {flexDirection: 'row', marginLeft: 10},
});
