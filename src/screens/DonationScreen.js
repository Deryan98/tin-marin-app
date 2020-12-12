import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Text,
  Divider,
  Image,
  ButtonGroup,
  Input,
  CheckBox,
  Button,
} from 'react-native-elements';

const DonationScreen = () => {
  const [indexQuantity, setIndexQuantity] = React.useState(0);
  const [indexPeriod, setIndexPeriod] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  //Event Handlers
  const updateIndexQuantity = (selectedIndex) => {
    setIndexQuantity(selectedIndex);
  };

  const updateIndexPeriod = (selectedIndex) => {
    setIndexPeriod(selectedIndex);
  };

  const updateChecked = (isChecked) => {
    setChecked(isChecked);
  };

  const quantityButtons = ['$1', '$2', '$5', '$10', '$20'];
  const periodButtons = ['Unica', 'Mensual'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h3 h3Style={styles.h3Style}>
          Haz tu Donación
        </Text>
      </View>
      <Divider style={{backgroundColor: 'blue'}} />
      <View style={styles.rawContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo.gif')} />
        </View>
      </View>
      <View style={styles.rawContainer}>
        <ButtonGroup
          onPress={updateIndexPeriod}
          selectedIndex={indexPeriod}
          buttons={periodButtons}
          containerStyle={{height: 50, borderRadius: 10}}
        />
      </View>
      <View style={styles.rawContainer}>
        <ButtonGroup
          onPress={updateIndexQuantity}
          selectedIndex={indexQuantity}
          buttons={quantityButtons}
          containerStyle={{height: 50, borderRadius: 10}}
        />
      </View>
      <View style={styles.rawContainer}>
        <Input
          placeholder="Otra Cantidad"
          leftIcon={{type: 'font-awesome', name: 'usd'}}
          inputContainerStyle={styles.inputContainerStyle}
          leftIconContainerStyle={styles.leftIconContainerStyle}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.rawContainer}>
        <Input
          label="Nombre Completo"
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <View style={styles.rawContainer}>
        <Input
          label="Correo Electrónico"
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <View style={styles.rawContainer}>
        <Input
          label="Documento de Identidad"
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <View style={styles.rawContainer}>
        <Input
          label="NIT"
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <View style={styles.rawContainer}>
        <CheckBox
          title="Deseo recibo de donación"
          checked={checked}
          onPress={() => updateChecked(!checked)}
        />
      </View>
      <View style={styles.rawContainer}>
        <Button
          title="Donar!"
          titleStyle={styles.buttonTitleStyle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
    </ScrollView>
  );
};

export default DonationScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  rawContainer: {
    marginVertical: 5,
  },
  h3Style: {
    fontWeight: 'normal',
    //fontFamily: 'nunito',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 150,
  },
  logo: {width: 150, height: 150},
  labelStyle: {
    marginBottom: 15,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 10,
    marginBottom: -15,
  },
  leftIconContainerStyle: {
    backgroundColor: 'silver',
    width: '10%',
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: 'crimson',
    borderRadius: 7,
    width: 200,
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTitleStyle: {
    fontWeight: 'normal',
  },
});
