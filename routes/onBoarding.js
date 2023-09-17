import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, Input, Image, withTheme } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default class App extends Component {
  render() {
    return (
      
      <Swiper style={styles.wrapper}>
        
        <View style={styles.slide1}>
        <StatusBar style="light" />

          <Image
            source={require('../../assets/logo.jpg')}
            style={{ width: 250, height: 100 }}
          />
          <View style={styles.info}>
            <Text style={styles.text}>
              Welcome to cosmox app. Here you can explore the wonders of the
              Universe.We welcome you with open arms.Enjoy our app.
            </Text>
            <Text style={styles.text}>
              Swipe through the pages and you will see continue button to go on
              the main app.Go ahead
            </Text>
          </View>
        </View>
        <View style={styles.slide2}>
        <StatusBar style="light" />

          <Image
            source={require('../../assets/A-2/celes.png')}
            style={{ width: 150, height: 150 }}
          />
          <View style={styles.info2}>
            <Text style={styles.text}>
            An astronomical object, celestial object, stellar object or heavenly body is a naturally occurring physical entity, association, or structure that exists within the observable universe.[1] In astronomy, the terms object and body are often used interchangeably. However, an astronomical body or celestial body is a single, tightly bound, contiguous entity, while an astronomical or celestial object is a complex, less cohesively bound structure, which may consist of multiple bodies or even other objects with substructures.

            </Text>
            <Text style={styles.text}>
              In this app we included Planet, Constallations,Exoplanets.Each update we will included 8 more Exoplanets and constallation.
            </Text>
          </View>
        </View>
        <View style={styles.slide3}>
        <StatusBar style="light" />

          <Image
            source={require('../../assets/A-2/meteor_icon.png')}
            style={{ width: 250, height: 250 }}
          />
          <View style={styles.info3}>
            <Text style={styles.text}>
              This screen maps the enire galaxy to check for meteors.
            </Text>
            <Text style={styles.text}>
              A meteor is a streak of light in the sky caused by a meteoroid
              crashing through Earth's atmosphere. Meteoroids are lumps of rock
              or iron that orbit the sun. Most meteoroids are small fragments of
              rock created by asteroid collisions. Comets also create meteoroids
              as they orbit the sun and shed dust and debris.
            </Text>
          </View>
        </View>
        <View style={styles.slide4}>
        <StatusBar style="light" />

          <Image
            source={require('../../assets/enjoy-.png')}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.info4}>
            <Text style={styles.text}>
              This is all about this app. We hope you enjoy this app.And there
              is one more thing you need to know the app is powered by centrigonus
              Operating system(COS).We will realease feature updates and performance
              updates simultaniously.
            </Text>
            <Text style={styles.text}>
              If you agree to our terms and condition,Click on cotinue button below
            </Text>

            <TouchableOpacity
              style={styles.soft}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={styles.T}>continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000235',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#163769',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0bc96',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD580',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  soft: {
    //flex:1,
    marginTop: 30,
    marginLeft: -1,
    backgroundColor: '#322BB3',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  T: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  info: {
    //flex: 0.32,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    borderTopRadius: 30,
    padding: 30,
  },
  info2: {
    //flex: 0.74,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    borderTopRadius: 30,
    padding: 10,
  },
  info3: {
    //flex: 0.59,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    borderTopRadius: 30,
    padding: 10,
  },
  info4: {
    //flex: 0.63,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    padding: 10,
  },
});