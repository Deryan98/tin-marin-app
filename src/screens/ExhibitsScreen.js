import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { getAllExhibitions } from '../api/exhibitions';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import URL from '../constants/URL';

const ExhibitsScreen = ({ navigation }) => {
  const [exhibitions, setExhibitions] = useState(null);
  const [loading, setLoading] = useState(true);
  let swapColor = true;

  useEffect(() => {
    getAllExhibitions().then((response) => {
      setExhibitions(response);
      setLoading(false)
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        loading ?  
        <ActivityIndicator style={{
          marginTop: 200
        }} size="large" color="#0000ff"/>
        :
        <View style={styles.view}>
        <Text style={styles.title}>Exhibiciones</Text>
        <View style={styles.line}></View>
        {map(exhibitions, (exhibition, index) => {
          if (index % 2 === 0) {
            swapColor = !swapColor;
          }
          return (
            <Card
              key={exhibition._id}
              index={index}
              textBtn="Conócela"
              color={swapColor ? Colors.green : Colors.magenta}
              exhibition={exhibition}
              navigation={navigation}
            />
          );
        })}
      </View>
    
      }
     
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

export default ExhibitsScreen;
