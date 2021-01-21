import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native'

const ContactScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titular}>Conócenos</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }} />
            <View style={styles.containerlogo}><Image style={styles.Logo} source={{ uri: 'https://tinmarin.org/wp-content/uploads/2020/04/logo-tm-con-marco-blanco.png', }} /></View>
            <Text style={styles.tema}>Misión:</Text>
            <Text style={styles.title2}>Contribuir a la formación de los niños y sus acompañantes en ciudadanos integrales y creativos, mediante el aprendizaje significativo, la orientación cultural y la experimentración divertida con integridad, innovación y trabajo en equipo.</Text>
            <Text style={styles.tema}>Visión:</Text>
            <Text style={styles.title2}>Ser el espacio favorito, cultural y divertido de los niños para aprender y disfrutar de experiencias únicas, emocionantes e inolvidables; y ser mejores protagonistas de su desarrollo a nivel personal, escolar y social.</Text>
            <Text style={styles.tema}>Valores:</Text>
            <Text style={styles.title}>
              Innovación{"\n"}
          Integridad{"\n"}
          Lealtad{"\n"}
          Respeto{"\n"}
          Trabajo en equipo{"\n"}
          </Text>
            
          </ScrollView>
      );
    }
    export default ContactScreen
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#ffffff"
      },
      title2: {
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        color: "#20232a",
        textAlign: "justify",
        fontFamily: 'NunitoSans-Bold',
        fontSize: 18,
      },
      title: {
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        color: "#20232a",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
      },
      tema: {
        marginTop: 13,
        textAlign: "center",
        fontFamily: 'NunitoSans-Bold',
        fontSize: 24,
        color: "#B22222"
      },
      Logo: {
        width: 200,
        height: 200
      },
      containerlogo: {
        alignItems: 'center',
        backgroundColor: "#ffffff",
        padding: 15
      },
      titular: {
        textAlign: "center",
        fontFamily: 'NunitoSans-Bold',
        fontSize: 28
      },
    });