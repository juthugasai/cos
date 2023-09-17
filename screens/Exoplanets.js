import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Constants from 'expo-constants';
import { planets } from '../components/Exoplanet/Planet';
import PlanetCard from '../components/Exoplanet/ExoCard';
import { IconButton, Title } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';



export default class HomeScreen extends React.Component{

render(){
  return(
    <View style={styles.container}>
       <StatusBar style="light" />

      <IconButton
        icon=""
        size={30}
        style={styles.navButton}
        color="#fff"
        onPress={() => this.props.navigation.goBack()}
      />
      <View style={styles.header}>
    

        <Text style={styles.title}>Exoplanet-Scope</Text>
      </View>

    <FlatList
          data={planets}
          renderItem={({ item }) => (
            
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ExoDetails', { planet: item })}>
              <PlanetCard planet={item} />
            </TouchableOpacity>
          )}
        />
    </View>
  )
}



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
        flexDirection: 'column',
    backgroundColor: '#000235',
  },

  header: {
    //flexDirection: 'row',
    justifyContent: 'center',
    //paddingHorizontal: 20,
    //alignItems: 'center',
    //height: 100,
    marginTop:-45,
    marginLeft:90,
    margin:20,
    backgroundColor:
      'linear-gradient(to right, #1e5799 0%,#207cca 41%,#207cca 43%,#7db9e8 100%)',
  },
  planetList: {
    marginHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  navButton: {
    marginTop: 35,
  },

});



