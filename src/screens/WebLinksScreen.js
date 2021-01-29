import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';
import { getAllLinks } from '../api/weblinks';
import { LogBox } from 'react-native';
import { size } from 'lodash';

LogBox.ignoreAllLogs();

const WebLinksScreen = ({ navigation }) => {
  const [links, setlinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getAllLinks(signal).then((response) => {
      setlinks(response);
      setLoading(false);
      setFetched(true);
    });

    if (fetched) abortController.abort();
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
      ) : size(links) == 0 ? (
        <Text style={styles.text}>No se encontraron Sitios de Interés</Text>
      ) : (
        <View style={styles.view}>
          <Text style={styles.title}>Sitios de Interes</Text>
          <View style={styles.line}></View>
          {links.map((link, key) => (
            <BasicCard
              key={key}
              imageURL={link.image}
              title={link.title}
              color={Colors.magenta}
              url={link.url}
              textBtn="Saber Mas"
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 30,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
});

export default WebLinksScreen;
