import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform
} from 'react-native';
import { Button, Input, Image, withTheme } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../config';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Root');
      }
    });
    return unsubscribe;
  }, [navigation]);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  const RegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : ''}


    enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../../assets/logo.jpg')}
        style={{ width: 250, height: 100 }}
      />

      <View style={styles.inputContainer}>
        <Input
        style={{color:'white'}}
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
        style={{color:'white'}}
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <TouchableOpacity style={styles.button1} onPress={signIn}
      >
        <Text style={styles.T}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={RegisterNavigation}>
        <Text style={styles.T}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000235',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#ffg',
  },
  button1: {
    //flex:1,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#322BB3',
    borderRadius: 400,
    height: 40,
    width: 180,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  T: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },


  
});
