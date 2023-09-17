import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import { planets } from '../components/Planets/Planet';
import PlanetDetailsCard from '../components/Planets/PlanetDetailsCard';
const DetailsScreen = ({ navigation, route }) => {
  const { planet } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.coverImageParent}>
        <Image
          source={{ uri: planet.picture }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <PlanetDetailsCard planet={planet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  navBar: {
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100,
  },

  coverImageParent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    zIndex: 99,
    overflow: 'hidden',
  },
});

export default DetailsScreen;
