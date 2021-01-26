import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { getAllCovidRecommendations } from '../api/covid';
import { Card, Icon, Text } from 'react-native-elements';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { COVIDS } from '../data/dummy-data';
import { coinButton } from '../helpers/audio';

const CovidInfo = ({ navigation, route }) => {
  const { title, description, image, steps } = route.params;

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.line}></View>
          <MainParagraph description={description} />
          <RenderImage url={image} />
          <Text style={styles.subtitle}>Recomendaciones a Seguir</Text>
          <FollowSteps steps={steps} />
          <Footer navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainParagraph = ({ description }) => {
  return (
    <View style={styles.view}>
      {description.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>{`${paragraph}\n`}</Text>
      ))}
    </View>
  );
};

const RenderImage = ({ url }) => {
  return (
    <View style={{ ...styles.imageContainer }}>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
};

const FollowSteps = ({ steps }) => {
  return (
    <Card containerStyle={{ borderRadius: 15 }}>
      <Card.Title style={styles.card_title}>
        A continuación se muestran las siguientes indicaciones:
      </Card.Title>
      <View>
        {steps.map((step, index) => (
          <View key={index}>
            <Text style={{ ...styles.paragraph }}>{`\u2022 ${step}`}</Text>
            <Card.Divider />
          </View>
        ))}
      </View>
    </Card>
  );
};

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <FooterLinks
        text="Preguntas Frecuentes"
        name="question-circle"
        color="darkturquoise"
        size={75}
        navigation={navigation}
        screenRouteName="FAQs"
      />
      <FooterLinks
        text="Sitios de Interes"
        name="exclamation-circle"
        color="green"
        size={75}
        navigation={navigation}
        screenRouteName="WebLinks"
      />
    </View>
  );
};

const FooterLinks = ({
  navigation,
  name,
  color,
  size,
  text,
  screenRouteName,
}) => {
  return (
    <TouchableOpacity
      style={{ borderRadius: 15 }}
      onPressIn={coinButton}
      onPress={() => {
        navigation.navigate(screenRouteName);
      }}>
      <View style={styles.footer_column}>
        <Icon
          name={name}
          type="font-awesome-5"
          solid
          color={color}
          size={size}
        />
        <Text style={styles.footer_links}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CovidInfo;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
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
  imageContainer: {
    width: '95%',
    height: 200,
  },
  image: { width: '100%', height: 200, borderRadius: 15 },
  subtitle: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
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
  footer: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer_column: {
    width: 150,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer_links: {
    fontSize: 15,
    color: Colors.primaryColor,
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  ul: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 15,
  },
});
