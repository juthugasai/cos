import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import News from '../screens/News';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Stellar from '../components/Settings/stellar';
import Aspods from '../components/Aspod/main';
import Bot from '../screens/Bot';



function Feed() {
  return (
    <View style={{ flex: 1,
      marginTop:-135, 
    justifyContent: 'center', 
    //alignItems: 'center' 
  }}>
      <News/>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Stellar/>
   </View>
  );
}

function Aspod() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Aspods/>
   </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        tabBarActiveTintColor: '#322BB3',
        
      }}
      tabBarOptions={{
        //showLabel: false,
      }}
    >
      
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'News',
          headerShown: false ,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper-variant" color={color} size={size} />
          ),
        }}
      />

<Tab.Screen
        name="Apod"
        component={Aspods}
        options={{
          tabBarLabel: 'APOD',
          headerShown: false ,
          backgroundColor: '#000235',
          

          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons name="image" color={color} size={size} />
      ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Stellar-Updates',
          headerShown: false ,
          backgroundColor: '#000235',
          

          tabBarIcon: ({ color, size,focused }) => (
<Image
                  source={require('../../assets/stellar.png')}
                  style={{width:32,height:30, tintColor:focused ? '#322BB3' : 'gray'}} 
                />          ),
        }}
      />
      
      
    </Tab.Navigator>
  );
}

export default class HomeNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          
          <StatusBar style="light" />


            <Image
              source={require('../../assets/logo.jpg')}
              style={styles.uni}
            />

            <View>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  this.props.navigation.navigate('PlanetScreen');
                }}>
                <Image
                  source={require('../../assets/A-3/Exo.png')}
                  style={styles.exo}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  this.props.navigation.navigate('Cons');
                }}>
                <Image
                  source={require('../../assets/A-5/con.png')}
                  style={styles.iss}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button5}
                onPress={() => {
                  this.props.navigation.navigate('Exo');
                }}>
                <Image
                  source={require('../../assets/A-6/logo.png')}
                  style={styles.iss}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button3}
                onPress={() => {
                  this.props.navigation.navigate('Meteor');
                }}>
                <Image
                  source={require('../../assets/A-2/meteor_icon.png')}
                  style={styles.meteor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button4}
                onPress={() => {
                  this.props.navigation.navigate('Weather');
                }}>
                <Image
                  source={require('../../assets/weather.png')}
                  style={styles.settings}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: '#322BB3',
                borderBottomWidth: 2,
                top: 120,
              }}
            />
            <View style={{flex:1,marginTop:120}}>
             <NavigationContainer independent={true}
    screenOptions={{ headerShown: false,backgroundColor: '#000235' }}
    >
      <MyTabs />
    </NavigationContainer></View>

            
         
        </View>
        
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000235',

    // alignItems: 'center',
    //justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  view: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 0.1,
    resizeMode: 'cover',
    // width:1100
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  droidSafeArea: {
   // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iss: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    
    backgroundColor: 'white',
    borderRadius: 40,
  },

  meteor: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    
    backgroundColor: 'white',
    borderRadius: 40,
  },
  exo: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
        backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
  },
  uni: {
    position: 'absolute',
    height: 150,
    width: 250,
    resizeMode: 'contain',
    right: 5,
    left: 25,
    top: -5,
    
    alignItems: 'center',
  },
  settings: {
    position: 'absolute',
    height: 50,
    width: 50,
    resizeMode: 'contain',
        backgroundColor: 'white',
    borderRadius: 40,
  },

  button1: {
    top: 110,
    left: 30,
    right: 5,
    height: 40,
  },

  button2: {
    marginTop: -35,
    right: 5,
    left: 90,
    top: 105,
    height: 35,
  },
  button3: {
    marginTop: -35,
    right: 5,
    left: 210,
    top: 105,
    height: 40,
  },
  button4: {
    marginTop: -35,
    right: 5,
    left: 270,
    top: 100,
    height: 40,
  },
  button5: {
    marginTop: -35,
    right: 5,
    left: 150,
    top: 105,
    height: 35,
  },
});
