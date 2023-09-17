import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { IconButton, Title } from 'react-native-paper';

import MapView, { Marker, } from 'react-native-maps';
import * as Speech from 'expo-speech';

import axios from 'axios';

const speak = () => {
    const thingToSay =
      'The International Space Station is a large spacecraft in orbit around Earth. It serves as a home where crews of astronauts and cosmonauts live. ... This means it orbits Earth every 90 minutes. NASA is using the space station to learn more about living and working in space.';
    Speech.speak(thingToSay);
  };

export default class IssLocationScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          location: {},
        };
      }

      componentDidMount() {
        this.getIssLocation();
      }

      getIssLocation = () => {
        axios
          .get('https://api.wheretheiss.at/v1/satellites/25544')
          .then((response) => {
            this.setState({ location: response.data });
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      };
      render() {
        if (Object.keys(this.state.location).length === 0) {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.load}
                source={require('../../assets/A-1/loading2.gif')}
              />
            </View>
          );
        }else{
            return (
                <View style={styles.container}>
                  <SafeAreaView style={styles.droidSafeArea} />
                  <ImageBackground
                    source={require('../../assets/A-2/bg.png')}
                    style={styles.backgroundImage}>
                    <IconButton
                      icon="keyboard-backspace"
                      size={30}
                      style={styles.navButton}
                      color="white"
                      onPress={() => this.props.navigation.goBack()}
                    />
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleText}>ISS Location</Text>
                    </View>
                    <View style={styles.mapContainer}>
                      <MapView
                        style={styles.map}
                        region={{
                          latitude: this.state.location.latitude,
                          longitude: this.state.location.longitude,
                          latitudeDelta: 100,
                          longitudeDelta: 100,
                        }}>
                        <Marker
                          coordinate={{
                            latitude: this.state.location.latitude,
                            longitude: this.state.location.longitude,
                          }}>
                          <Image
                            source={require('../../assets/A-2/iss_icon.png')}
                            style={{ height: 50, width: 50 }}
                          />
                        </Marker>
                        
                      </MapView>
                      
                    </View>
                    <View>
                      
                    </View>

                    
                    <View style={styles.infoContainer}>
                      
                      <Text style={styles.infoText}>
                        Latitude: {this.state.location.latitude}
                      </Text>
                      <Text style={styles.infoText}>
                        Longitude: {this.state.location.longitude}
                      </Text>
                      <Text style={styles.infoText}>
                        Altitude (KM): {this.state.location.altitude}
                      </Text>
                      <Text style={styles.infoText}>
                        Velocity (KM/H): {this.state.location.velocity}
                      </Text>
                      <TouchableOpacity style={styles.Button} onPress={speak}>
                        <Text style={styles.Text}>What is ISS</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              );
            
        }
        }




}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  
    },
    droidSafeArea: {
      marginLeft: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      
      // width:1100
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    titleContainer: {
      flex: 0.1,
      marginTop: -65,
      marginLeft:70,
      margin:5,
      justifyContent: 'center',
      //alignItems: 'center',
    },
    Button: {
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
  
      backgroundColor: '#322BB3',
      fontSize: 22,
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    mapContainer: {
      flex: 0.7,
    },
    map: {
      width: '100%',
      height: '105%',
    },
    infoContainer: {
      flex: 0.2,
      backgroundColor: '#000235',
      marginTop: -10,
      borderRadius: 30,
      borderTopRadius: 30,
      padding: 30,
    },
    infoText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
      margin:2
    },
  
    load: {
      width: 500,
      height: 450,
      //tintColor:'purple'
    },
    Text: {
      //flex: 0.5,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    navButton: {
      //margin: 20,
      color:"white"
    },
  });
  