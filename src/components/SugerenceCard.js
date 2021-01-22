import React from 'react';
import Colors from '../constants/Colors';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput
} from 'react-native';

const GenericCard = ({ sugerenceType, color}) => {

    return (
        <SafeAreaView style={styles.card}>
            <View style={[styles.tituloView, { backgroundColor: color }]}>
                <Text style={styles.titulo}>{`Comentario: ${sugerenceType}`}</Text>
            </View>
            <View style={styles.textAreaContainer}>
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Escribe tu comentario aqui"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
            </View>
        </SafeAreaView>
    );
};

export default GenericCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 40,
        marginTop: 20,
        width: '100%',
    },
    textAreaContainer: {
        width: '100%',
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
    },
    textArea: {
        textAlignVertical: 'top',
    },
    viewCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 100,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    tituloView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    titulo: { fontSize: 19, color: '#fff', fontWeight: 'bold' },
    subTitulo: { fontSize: 19, color: '#858796', fontWeight: 'normal' }

});
