import { map } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { FAQs } from '../data/dummy-data';
import Colors from '../constants/Colors';

const FAQScreen = ({ navigation }) => {
  const [faqs, setFaqs] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <Text style={styles.title}>Preguntas Frecuentes</Text>
          <View style={styles.line}></View>
          {FAQs.map((faq, index) => {
            return (
              <Card key={index} containerStyle={{ borderRadius: 15 }}>
                <Card.Title style={styles.card_title}>
                  {faq.question}
                </Card.Title>
                <View>
                  <Text style={styles.paragraph}>{faq.answer}</Text>
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ListingCards = () => {
  return null;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
  },
  paragraph: {
    fontFamily: 'NunitoSans-Bold',
    marginVertical: 10,
    textAlign: 'justify',
    marginBottom: 10,
    fontSize: 15,
  },
  card_title: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'justify',
    backgroundColor: Colors.primaryColor,
    color: 'white',
    marginTop: -15,
    marginHorizontal: -16,
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
});
export default FAQScreen;
