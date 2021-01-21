import { fromPairs } from 'lodash';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WebLinksScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Web Links Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default WebLinksScreen;
