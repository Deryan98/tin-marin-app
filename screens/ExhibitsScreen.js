import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import URL from '../constants/URL';

export default ExhibitsScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Card
          titulo="Banco de niños"
          textBtn="Conócela"
          color={Colors.magenta}
          srcImg={URL.banco}
        />
        <Card
          titulo="El avión"
          textBtn="Conócela"
          color={Colors.magenta}
          srcImg={URL.avion}
        />
        <Card
          titulo="El hospital"
          textBtn="Conócela"
          color={Colors.green}
          srcImg={URL.hospital}
        />
        <Card
          titulo="La estación de bomberos"
          textBtn="Conócela"
          color={Colors.green}
          srcImg={URL.hospital}
        />
        <Card
          titulo="La cama de los clavos"
          textBtn="Conócela"
          color={Colors.magenta}
          srcImg={URL.clavos}
        />
        <Card
          titulo="El volcán"
          textBtn="Conócela"
          color={Colors.magenta}
          srcImg={URL.volcan}
        />
        <Card
          titulo="Dulce Hogar de Zucarón"
          textBtn="Conócela"
          color={Colors.green}
          srcImg={URL.zucaron}
        />
        <Card
          titulo="El Mercado de Don Emprendedor"
          textBtn="Conócela"
          color={Colors.green}
          srcImg={URL.mercado}
        />
        <Card
          titulo="Aguacero"
          textBtn="Conócela"
          color={Colors.magenta}
          srcImg={URL.agua}
        />
        <Card
          titulo="Burbujulandia"
          textBtn="Conócela"
          color={Colors.magenta}
          srcImg={URL.burbuja}
        />
        <Card
          titulo="Jugando y Construyendo"
          textBtn="Conócela"
          color={Colors.green}
          srcImg={URL.construyendo}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
