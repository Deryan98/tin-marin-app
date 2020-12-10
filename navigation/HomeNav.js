import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//importing screens
import HomeScrn from '@screens/HomeScreen';
//importing components

export const HomeNav = ({navigation}) => {
  const HomeStk = createStackNavigator();
  const toogleMenu = (navigation) => {
    navigation.openDrawer();
  };
  return (
    <HomeStk.Navigator>
      <HomeStk.Screen
        name="Home"
        component={HomeScrn}
        options={{
          headerShown: false,
        }}
      />
    </HomeStk.Navigator>
  );
};
