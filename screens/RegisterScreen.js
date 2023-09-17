import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../config';
import { IconButton, Title } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState();

  const getPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('We need permission to access your camera ');
      }
    }
    pickImage();
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setProfilePic(result.uri);
      }
    } catch (error) {
      console.log('Error @pickImage:', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to Login',
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            profilePic ||
            'setProfilePic://www.cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}enabled style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 10,color:'white' }}>
        Create a Cosmox account
      </Text>
      <View style={styles.inputContainer}>

      <StatusBar style="light" />
      <Image
        source={require('../../assets/logo.jpg')}
        style={{ width: 250, height: 100,margin:10 }}
      />
       
        <Input
        style={{color:'white'}}
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
        style={{color:'white'}}
          placeholder="Email"
          type="email"
          autoCapitalize="none"
          autoCompleteType="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Input
        style={{color:'white'}}
          placeholder="Password"
          type="text"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={register}
        />
      </View>

      <TouchableOpacity style={styles.button1} onPress={register}>
        <Text style={styles.T}>Register</Text>
      </TouchableOpacity>

     
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
  button: {
    width: 200,
    marginTop: 10,
    borderRadius: 30,
  },
  inputContainer: {
    width: 300,
  },
  profileImage: {
    backgroundColor: '#322BB3',
    borderRadius: 40,
    height: 80,
    width: 80,
    marginTop: -20,
    marginBottom: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
  T: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
