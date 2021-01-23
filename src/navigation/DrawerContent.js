import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Avatar } from 'react-native-paper';

import Colors from '../constants/Colors';
const DrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView style={styles.drawer}>
      <Drawer.Section style={styles.image}>
        <Avatar.Image
          backgroundColor={'#4E73DF'}
          size={100}
          source={require('../assets/logo.gif')}
        />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item
          label="Menu Principal"
          onPress={() => navigation.navigate('home')}
          icon="home"
        />
        <Drawer.Item
          label="Exhibiciones"
          onPress={() => navigation.navigate('exhibits')}
          icon="ticket"
        />
        {/* <Drawer.Item
                    label="Eventos"
                    onPress={()=> navigation.navigate("events")}
                    icon="gift"
                /> */}
        <Drawer.Item
          label="Recomendaciones Covid-19"
          onPress={() => navigation.navigate('covid')}
          icon="virus"
        />
        <Drawer.Item
          label="Conócenos Más"
          onPress={() => navigation.navigate('knowMore')}
          icon="card-account-mail"
        />
        <Drawer.Item
          label="Sugerencias"
          onPress={() => navigation.navigate('comments')}
          icon="email-alert"
        />
        {/* <Drawer.Item
          label="Donaciones"
          onPress={() => navigation.navigate('donations')}
          icon="heart"
        /> */}
        <Drawer.Item
          label="Preguntas Frecuentes"
          onPress={() => navigation.navigate('FAQs')}
          icon="frequently-asked-questions"
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    backgroundColor: '#4E73DF',
  },
  second: {
    color: '#860472',
  },
  drawer: {
    backgroundColor: Colors.primaryColor,
    color: '#FFF',
  },
});

export default DrawerContent;
