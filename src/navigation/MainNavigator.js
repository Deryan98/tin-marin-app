import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from "./StackNavigation";
import DrawerContent from "./DrawerContent";


const Drawer = createDrawerNavigator();

export default MainNavigator = () => {
  
  return (
    <Drawer.Navigator 
      initialRouteName="app"
      drawerContent={(props)=> <DrawerContent {...props}/>}>
      <Drawer.Screen name="app" component={StackNavigation}/>
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   drawerStyle: {
//     backgroundColor: Colors.primaryColor,
//     width: 240,
//   },
//   drawerIcon: {
//     //backgroundColor: 'white',
//   },
//   drawerLabel: {fontWeight: 'bold'},
// });

// const drawerContentOptions = {
//   activeTintColor: Colors.activeDrawerItemTintColor,
//   inactiveTintColor: Colors.inactiveDrawerItemTintColor,
//   itemStyle: {marginVertical: 5},
// };

// const screenOptions = (drawerLabel, iconName, iconType) => {
//   return {
//     headerShown: true,
//     headerTitle: drawerLabel,
//     drawerLabel: ({focused, color}) => (
//       <Text style={{...styles.drawerLabel, color: color}}>{drawerLabel}</Text>
//     ),
//     drawerIcon: ({focused, color, size}) => (
//       <Icon
//         name={iconName}
//         type={iconType}
//         color={color}
//         size={size}
//         style={styles.drawerIcon}
//         solid={true}
//       />
//     ),
//   };
// };
