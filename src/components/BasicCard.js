import React from 'react';
import { Linking } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';


const BasicCard = ({title, imageURL,  color, textBtn, url}) => {

  
  return (
    <SafeAreaView style={styles.card}>
      <View style={[styles.tituloView, {backgroundColor: color}]}>
        <Text style={styles.titulo}>{title}</Text>
      </View>
      <Image source={{uri: imageURL}} style={styles.img} />
      <View style={styles.viewCard}>
        <View style={[styles.button, {backgroundColor: color}]}>
          <TouchableOpacity
            style={styles.opacity}
            onPress={()=> Linking.openURL(url)}>
            <Text style={styles.buttonText}>{textBtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasicCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 40,
    marginTop: 20,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/3
  },
  viewCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tituloView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: Dimensions.get('window').height/12
  },
  titulo: {fontSize: 19, color: '#fff', fontWeight: 'bold', textAlign: 'center'},
  button: {
    paddingVertical: 7,
    borderRadius: 10,
    width: '35%',
    opacity: 0.8,
    height: 40,
    marginTop: -60,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    opacity: 1,
  },
  img: {
    width: '100%',
    height: '90%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
