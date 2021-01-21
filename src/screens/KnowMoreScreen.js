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
            imageURL="https://idesaa.edu.mx/blog/wp-content/uploads/2017/08/blog1-2.jpg"
            color={Colors.magenta}
            textBtn="Saber Mas"
            navigation={navigation}
            screenName="contact"
          />

          <GenericCard
            title="Misión, Visión, Valores"
            imageURL="http://blogs.encamina.com/en-las-nubes/wp-content/uploads/sites/9/2013/02/Misin-vision-valores.jpg"
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
