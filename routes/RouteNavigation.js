import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import Navigation from './HomeRoute';
import User from "../../assets/playstore.png";
import { DrawerItemList, } from "@react-navigation/drawer";
import Settings from '../screens/Settings';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PlanetScreen from '../screens/PlanetScreen';
import PlanetDetails from '../screens/PlanetDetails';
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
import Weather from '../components/weather/screens/HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Game from '../components/game/game'

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Navigation/>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Navigation/>
     
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator useLegacyImplementation

    drawerContent={
          (props) => {
            return (
             <View>
              <Text></Text>
              <Text></Text>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#322BB3",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#fff"
                    }}
                  >Cosmox</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff"
                    }}
                  >The Universal App</Text>
                </View>
                <DrawerItemList {...props} /></View>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#000235",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#000235",
          },
          //headerShown:false,
          headerTransparent:true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#fff"
          }
        }}>
<Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/home.png')}
                  style={{width:30,height:30,tintColor:'#322BB3'}}
                />
            )
          }}
          component={Navigation}
        />
        <Drawer.Screen
          name="PlanetScreen"
          options={{
            drawerLabel: "Planets",
            title: "",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/A-3/Exo.png')}
                  style={{width:40,height:40}}
                />
            )
          }}
          component={PlanetScreen}
        />

<Drawer.Screen
          name="Cons"
          options={{
            drawerLabel: "Constallations",
            title: "",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/A-5/con.png')}
                  style={{width:35,height:35}}
                />
            )
          }}
          component={Cons}
        />

<Drawer.Screen
          name="Exo"
          options={{
            drawerLabel: "Exo-Planets",
            title: "",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/A-6/logo.png')}
                  style={{width:30,height:30}}
                />
            )
          }}
          component={Exo}
        />

<Drawer.Screen
          name="Meteor"
          options={{
            drawerLabel: "Meteor",
            title: "Meteor",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/A-2/meteor_icon.png')}
                  style={{width:50,height:40}}
                />
            )
          }}
          component={Meteor}
        />

<Drawer.Screen
          name="game"
          options={{
            drawerLabel: "Space-Vortex",
            title: "Space-Vortex",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/space.png')}
                  style={{width:50,height:40}}
                />
            )
          }}
          component={Game}
        />

<Drawer.Screen
          name="Weather"
          options={{
            drawerLabel: "Weather",
            title: "Weather",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/weather.png')}
                  style={{width:35,height:35,borderRadius:30}}
                />
            )
          }}
          component={Weather}
        />


        
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "",
            drawerIcon: () => (
              <Image
                  source={require('../../assets/settings.png')}
                  style={{width:35,height:35}}
                />
            )
          }}
          component={Settings}
        />


        

    </Drawer.Navigator>
  );
}

function App() {
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
    <NavigationContainer>
      <Stack.Navigator 
      //initialRouteName="Navigator"
      screenOptions={{ headerShown: false }}>
        
        

        {isAppFirstLaunched && (

<Stack.Screen name="boarding" component={onboarding} />)}
        <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Root" component={Root} />
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
          <Stack.Screen name="Weather" component={Weather} />
          <Stack.Screen name="game" component={Game} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
