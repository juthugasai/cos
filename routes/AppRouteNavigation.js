import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Home';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PlanetScreen from '../screens/PlanetScreen';
import PlanetDetails from '../screens/PlanetDetails';
import Settings from '../screens/Settings';
import Space from '../screens/Space';

import Build from '../components/Settings/build';
import Appinfo from '../components/Settings/AppInfo';
import Patch from '../components/Settings/patch';
import Cyber from '../components/Settings/cyber';
import Stellar from '../components/Settings/stellar';
import info from '../components/GPT/info';
import feed from '../components/feedback/FeedbackForm';
import Aspod from '../components/Aspod/main';

import Version from '../components/Settings/version';
import QHome from '../components/Quiz/Home';
import Quiz from '../components/Quiz/Quiz';
import QResult from '../components/Quiz/Result';
import Meteor from '../screens/Meteor';
import Cons from '../screens/constallation';
import ConsDetails from '../screens/consDetails';
import Exo from '../screens/Exoplanets';
import ExoDetails from '../screens/ExoDetails'
import onboarding from './onBoarding';
import Bot from '../screens/Bot'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Game from '../components/game/game'
import Weather from '../components/weather/screens/HomeScreen'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2c6bed' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

const Navigate =()=> {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);
    return (
      isAppFirstLaunched != null && (

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Navigator"
          screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && (
                      <Stack.Screen name="boarding" component={onboarding} />)}
                      <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={Navigation} />
          <Stack.Screen name="PlanetScreen" component={PlanetScreen} />
          <Stack.Screen name="PlanetDetails" component={PlanetDetails} />
          <Stack.Screen name="Cons" component={Cons} />
          <Stack.Screen name="ConsDetails" component={ConsDetails} />
          <Stack.Screen name="Exo" component={Exo} />
          <Stack.Screen name="ExoDetails" component={ExoDetails} />
          <Stack.Screen name="info" component={info} />
          <Stack.Screen name="Aspod" component={Aspod} />

          <Stack.Screen name="Meteor" component={Meteor} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Bot" component={Bot} />
          <Stack.Screen name="Patch" component={Patch} />    
          <Stack.Screen name="Cyber" component={Cyber} />    
          <Stack.Screen name="Stellar" component={Stellar} />    
          <Stack.Screen name="Space" component={Space} />    


          <Stack.Screen name="Build" component={Build} />
          <Stack.Screen name="Appinfo" component={Appinfo} />
          <Stack.Screen name="version" component={Version} />
          <Stack.Screen name="QHome" component={QHome} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="QResult" component={QResult} />
          <Stack.Screen name="feed" component={feed} />
          <Stack.Screen name="game" component={Game} />
          <Stack.Screen name="Weather" component={Weather} />



         



        
        </Stack.Navigator>
      </NavigationContainer>
    ))
  }
export default Navigate