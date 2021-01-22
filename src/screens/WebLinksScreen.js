import { fromPairs } from 'lodash';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BasicCard from '../components/BasicCard';
import BasicCard2 from '../components/BasicCard2';
import Colors from '../constants/Colors';


const WebLinksScreen = (navigation) => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
      <Text style={styles.title}>Sitios de Interes</Text>
      <View style={styles.line}></View>
          <BasicCard
            title="OMS"
            imageURL="https://www.eventoplus.com/content/thumbs/960_540/content/imgsxml/galerias/noticias/6992/big-oms966.jpg"
            color={Colors.magenta}
            navigation={navigation}
            textBtn="Entrar"
          />

          <BasicCard2
            title="OPS"
            imageURL="https://www.prensa-latina.cu/images/2020/septiembre/28/0-panamenricana.jpg"
            color={Colors.magenta}
            navigation={navigation}
            textBtn="Entrar"
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

export default WebLinksScreen;
