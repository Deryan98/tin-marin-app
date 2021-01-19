import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';

const GenericCard = ({ charge, color, name, email }) => {


    return (
        <SafeAreaView style={styles.card}>
            <View style={[styles.tituloView, { backgroundColor: color }]}>
                <Text style={styles.titulo}>{charge}</Text>
            </View>
            <View style={styles.viewCard}>
                <Text style={styles.subTitulo}>{name}</Text>
                <Text style={styles.subTitulo}>{email}</Text>
            </View>
        </SafeAreaView>
    );
};

export default GenericCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 40,
        marginTop: 20,
        width: 330,
    },
    viewCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height:100,
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
