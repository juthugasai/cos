import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,

} from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import firebase from 'firebase/compat/app';


export default class About extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <IconButton
          icon="keyboard-backspace"
          size={30}
          style={styles.navButton}
          color="#322BB3"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.text}>Space-Hub</Text>
        </View>

        
        <TouchableOpacity
          style={styles.ver1}
          onPress={() => {
            this.props.navigation.navigate('QHome');
          }}>
          <Text style={styles.T}>Cosmo-Quiz</Text>
        </TouchableOpacity>

        

        <TouchableOpacity
          style={styles.ver1}
          onPress={() => {
            this.props.navigation.navigate('Stellar');
          }}>
          <Text style={styles.T}>Stellar Updates</Text>
        </TouchableOpacity>


        <View >
            <Text style={styles.T}>Thuis is the place where we will introduce new thingsin the future updates,where yoou can explore and learn</Text>
        </View>

        

        

        <View style={{ marginTop: 100, marginLeft: 90 }}>
          <Text style={{color:'white'}}>Powered By:</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Cyber');}}>
          <Image
            source={require('../../assets/cyber.png')}
            style={{ height: 20, width: 20, marginLeft: 170, marginTop: -17 }}
          />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: -20, marginLeft: 195 }}>
          <Text style={{color:'white'}}>Cyber-Tech</Text>
        </View>
        <View><Text></Text></View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000235',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginTop:90,
    margin:30
  },

  text: {
    //flex: 0.5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    //margin: 60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text1: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text2: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  button: {
    //flex: 0.25,
    //marginTop: 50,
    //marginLeft: 50,
    //marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //height:70,
    borderRadius: 30,
    backgroundColor: 'purple',
  },

  ver: {
    //flex:1,
    marginTop: 70,
    marginLeft: 5,
    backgroundColor: '#322BB3',
    borderRadius: 10,
    height: 70,
    width: 170,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },

  ver1: {
    //flex:1,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#322BB3',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },

  soft: {
    //flex:1,
    marginTop: -70,
    marginLeft: 185,
    backgroundColor: '#322BB3',
    borderRadius: 10,
    height: 70,
    width: 170,
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

  navButton: {
    margin: 20,
    marginTop:30
  },
});
