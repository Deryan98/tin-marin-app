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
import { getAllExhibitions } from '../api/exhibitions';
import { Card, Icon, Text } from 'react-native-elements';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { COVIDS } from '../data/dummy-data';
import { API_HOST } from '../constants/URL';

const CovidScreen = ({ navigation }) => {
  const [covidInfo, setCovidInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = '5fdd70700855130e44eaa281';
  //let covidInfo;
  useEffect(() => {
    // getAllCovidRecommendations().then((response) => {
    //   console.log(response);
    //   setCovid(response);
    //   setLoading(false);
    // });

    COVIDS.map((covid) => {
      if (id === covid._id) setCovidInfo(covid);
      setLoading(false);
    });

    // const url = `${API_HOST}/recommendations`;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => json)
    //   .catch((error) => console.error(error));
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
            <Text style={styles.title}>{covidInfo.title}</Text>
            <View style={styles.line}></View>
            <MainParagraph description={covidInfo.description} />
            <RenderImage url={covidInfo.image} />

            <Text style={styles.subtitle}>Recomendaciones a Seguir</Text>
            <FollowSteps steps={covidInfo.steps} />
            <Footer navigation={navigation} />
          </View>
        )}
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
        screenRouteName="FAQs"
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
  },
  paragraph: {
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
