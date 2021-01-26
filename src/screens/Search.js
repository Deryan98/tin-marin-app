import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { map, size } from 'lodash';
import { getExhibitionByName } from '../api/exhibitions';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [exhibitions, setExhibitions] = useState(null);
  const [loading, setLoading] = useState(true);
  let swapColor = true;

  useEffect(() => {
    if (size(search) >= 0) {
      getExhibitionByName(search).then((response) => {
        setExhibitions(response);
        setLoading(false);
      });
    }
  }, [search]);

  const onChangeSearch = (e) => {
    if(size(e) > 0){
      setLoading(true);
    }else {
      setLoading(false)
    }
    setSearch(e);
  }

  return (
    <SafeAreaView style={styles.view}>
      <Searchbar
        placeholder="Buscar tu exhibición"
        iconColor="#4E73DF"
        icon="arrow-left"
        style={styles.input}
        inputStyle={{ color: '#000' }}
        onChangeText={onChangeSearch}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator
            style={{
              marginTop: 200,
            }}
            size="large"
            color="#0000ff"
          />
        ) : size(exhibitions) == 0 ? <Text style={styles.text}>No se encontraron exhibiciones</Text>:(
          <View style={styles.container}>
            {map(exhibitions, (exhibition, index) => {
              if (index % 2 == 0) {
                swapColor = !swapColor;
              }
              return (
                <Card
                  key={exhibition._id}
                  index={index}
                  textBtn="Conócela"
                  color={swapColor ? Colors.green : Colors.magenta}
                  exhibition={exhibition}
                  navigation={navigation}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    marginTop: -3,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  view: {
    marginBottom: 50,
  },
  text:{
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: "gray",
  }
});
