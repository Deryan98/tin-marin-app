import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon, Text} from 'react-native-elements';
import {HomeNav} from './HomeNav';
import ExhibitsScrn from '@screens/ExhibitsScreen';
import Colors from '@constants/Colors';

export default MainNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={styles.drawerStyle}
        drawerContentOptions={{...drawerContentOptions}}>
        <Drawer.Screen
          name="Home"
          component={HomeNav}
          options={{
            ...screenOptions('Menú Principal', 'home', 'font-awesome-5'),
          }}
        />
        <Drawer.Screen
          name="Exhibits"
          component={ExhibitsScrn}
          options={{
            ...screenOptions('Exhibiciones', 'archway', 'font-awesome-5'),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: Colors.primaryColor,
    width: 240,
  },
  drawerIcon: {
    //backgroundColor: 'white',
  },
  drawerLabel: {fontWeight: 'bold'},
});

const drawerContentOptions = {
  activeTintColor: Colors.activeDrawerItemTintColor,
  inactiveTintColor: Colors.inactiveDrawerItemTintColor,
  itemStyle: {marginVertical: 5},
};

const screenOptions = (drawerLabel, iconName, iconType) => {
  return {
    headerShown: true,
    headerTitle: drawerLabel,
    drawerLabel: ({focused, color}) => (
      <Text style={{...styles.drawerLabel, color: color}}>{drawerLabel}</Text>
    ),
    drawerIcon: ({focused, color, size}) => (
      <Icon
        name={iconName}
        type={iconType}
        color={color}
        size={size}
        style={styles.drawerIcon}
      />
    ),
  };
};
