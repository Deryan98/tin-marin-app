import React from 'react';
import { map } from 'lodash';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GenericCard from '../components/GenericCard';
import Colors from '../constants/Colors';


const KnowMoreScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
          <Text style={styles.title}>Conócenos Más</Text>
          <View style={styles.line}></View>
            <GenericCard
            title="Contactos"
            imageURL="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"
            color={Colors.magenta}
            textBtn="Saber Mas"
            navigation={navigation}
            screenName="contact"
          />

          <GenericCard
            title="Misión, Visión, Valores"
            imageURL="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"
            color={Colors.magenta}
            textBtn="Saber Mas"
            navigation={navigation}
            screenName="missionAndVision"
          />          
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
        view: {
        flexDirection: 'column',
    alignItems: 'center',
  },
  title:{
        marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold'

  },
  line:{
        height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC'
  }
});

export default KnowMoreScreen;
