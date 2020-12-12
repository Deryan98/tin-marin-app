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
import Colors from '../constants/Colors';

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
      <View style={styles.rowContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo.gif')} />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <ButtonGroup
          onPress={updateIndexPeriod}
          selectedIndex={indexPeriod}
          buttons={periodButtons}
          containerStyle={{height: 50, borderRadius: 10}}
          textStyle={{color: Colors.primaryColor}}
        />
      </View>
      <View style={styles.rowContainer}>
        <ButtonGroup
          onPress={updateIndexQuantity}
          selectedIndex={indexQuantity}
          buttons={quantityButtons}
          containerStyle={{height: 50, borderRadius: 10}}
          textStyle={{color: Colors.primaryColor}}
        />
      </View>
      <View style={styles.rowContainer}>
        <Input
          placeholder="Otra Cantidad"
          leftIcon={{type: 'font-awesome', name: 'usd'}}
          containerStyle={styles.inputParentContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          leftIconContainerStyle={styles.leftIconContainerStyle}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.rowContainer}>
        <Input
          label="Nombre Completo"
          labelStyle={styles.labelStyle}
          containerStyle={styles.inputParentContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <View style={styles.rowContainer}>
        <Input
          label="Correo Electrónico"
          labelStyle={styles.labelStyle}
          containerStyle={styles.inputParentContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.rowContainer}>
        <Input
          label="Documento de Identidad"
          labelStyle={styles.labelStyle}
          containerStyle={styles.inputParentContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.rowContainer}>
        <Input
          label="NIT"
          labelStyle={styles.labelStyle}
          containerStyle={styles.inputParentContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.rowContainer}>
        <CheckBox
          title="Deseo recibo de donación"
          checked={checked}
          onPress={() => updateChecked(!checked)}
          textStyle={styles.textStyle}
          containerStyle={styles.checkBoxContainerStyle}
        />
      </View>
      <View style={styles.rowContainer}>
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
  rowContainer: {
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
    fontWeight: 'normal',
  },
  textStyle: {
    fontWeight: 'normal',
  },
  checkBoxContainerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  inputParentContainerStyle: {
    borderColor: 'green',
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
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
