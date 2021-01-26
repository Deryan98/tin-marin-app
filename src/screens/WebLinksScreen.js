import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';
import {getAllLinks} from '../api/weblinks';

const WebLinksScreen = (navigation) => {
  const [links, setlinks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getAllLinks().then((response) => {
      console.log(response);
      setlinks(response);
      setLoading(false);
    })
  });
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      {loading ? (
          <ActivityIndicator
            style={{
              marginTop: 200,
            }}
            size="large"
            color="#0000ff"
          />
        ) : (
      <View style={styles.view}>
        <Text style={styles.title}>Sitios de Interes</Text>
        <View style={styles.line}></View>
        {
          links.map((link, key) => (
            <BasicCard
              key = {key}
              imageURL = {link.image}
              title = {link.title}
              color = {Colors.magenta}
              url = {link.url}
              textBtn = "Saber Mas"
            />
          )
          )
        }
      </View>
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
});

export default WebLinksScreen;
