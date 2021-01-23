import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { getAllCovidRecommendations } from '../api/covid';
import { Text } from 'react-native-elements';
import GenericCard from '../components/GenericCard';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { COVIDS } from '../data/dummy-data';
import URL from '../constants/URL';

const CovidScreen = ({ navigation }) => {
  // const [covidInfo, setCovidInfo] = useState(null);
  const [covid, setCovid] = useState(null);
  const [loading, setLoading] = useState(true);
  let swapColor = true;

  // const id = '5fdd70700855130e44eaa281';
  //let covidInfo;
  useEffect(() => {
    getAllCovidRecommendations().then((response) => {
      console.log(response);
      setCovid(response);
      setLoading(false);
    });

    // COVIDS.map((covid) => {
    //   if (id === covid._id) setCovidInfo(covid);
    //   console.log(covid);
    // });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text style={styles.title}>Recomendaciones para el Covid-19</Text>
            <View style={styles.line}></View>
            <CovidList
              covidRecs={covid}
              navigation={navigation}
              swapColor={swapColor}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const CovidList = ({ navigation, covidRecs, swapColor }) => {
  return covidRecs.map((covid, index) => {
    if (index % 2 === 0) swapColor = !swapColor;
    return (
      <GenericCard
        key={index}
        id={covid._id}
        title={covid.title}
        description={covid.description}
        imageURL={covid.image}
        steps={covid.steps}
        color={swapColor ? Colors.green : Colors.magenta}
        textBtn="Saber Más"
        navigation={navigation}
        screenName="InfoCovid"
      />
    );
  });
};

export default CovidScreen;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
});
