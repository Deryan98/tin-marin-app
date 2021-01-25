import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';
import {WEBS_RECOMM} from '../data/dummy-data';




const WebLinksScreen = (navigation) => {
  
  const [links, setlinks] = useState([]);

  useEffect(() => {
    
  })
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.view}>
      <Text style={styles.title}>Sitios de Interes</Text>
      <View style={styles.line}></View>
          {
            <BasicCard
            key = {key}
            title={weblink.title}
            imageURL={weblink.image}
            color={Colors.magenta}
            textBtn="Entrar"
            url={weblink.url}
          />
          ))
          }
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
