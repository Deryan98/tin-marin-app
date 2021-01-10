import { noConflict } from 'lodash';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Bomberos from '../assets/Bomberos.jpg';
import Banco from '../assets/Banco.jpg';
import Pinatas from '../assets/Pinatas.jpg';
import Sugerencias from '../assets/Sugerencias.png'
import Exhibicion from '../assets/Exhibicion.jpg'
const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <ScrollView>
      <View style={styles.view}>
      <Text style={styles.title}>Menu Principal</Text>
      <View style={styles.line}></View>
      
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('donations')}}
        style={styles.cardContainer}>
        <ImageBackground 
          imageStyle={{opacity: 0.5}}
          source={Bomberos}
          style={styles.card}
          borderRadius={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Donaciones</Text>
            <Text style={styles.text2}>Aqui puedes contribuir con la organización!</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={()=>{navigation.navigate('exhibits')}} 
        style={styles.cardContainer}>
        <ImageBackground 
          imageStyle={{opacity: 0.5}}
          source={Exhibicion}
          style={styles.card}
          borderRadius={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Exhibiciones</Text>
            <Text style={styles.text2}>Ven y conoce todas nuestras exhibiciones disponibles para que las puedas visitar !</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('events')}}
        style={styles.cardContainer}>
        <ImageBackground 
          imageStyle={{opacity: 0.5}}
          source={Pinatas}
          style={styles.card}
          borderRadius={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Piñatas y Eventos</Text>
            <Text style={styles.text2}>Celebra con nosotros tu piñata o evento!</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('comments')}}
        style={styles.cardContainer}>
        <ImageBackground 
          imageStyle={{opacity: 0.5}}
          source={Sugerencias}
          style={styles.card}
          borderRadius={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Sugerencias</Text>
            <Text style={styles.text2}>Para seguir mejorando, puedes dejarnos cualquier duda o inquietud!</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('contact')}}
        style={styles.cardContainer}>
        <ImageBackground 
          imageStyle={{opacity: 0.5}}
          source={Banco}
          style={styles.card}
          borderRadius={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Conocenos Más</Text>
            <Text style={styles.text2}>Aqui puedes encontrar informacion de contacto, estamos a la orden!</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
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
  },
  card:{
    width: 350,
    height: 200,
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: 10,
  },

  cardContainer:{
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  textContainer:{
    marginLeft: 20,
    marginTop: 20,
  },
  text:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text2:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default HomeScreen


