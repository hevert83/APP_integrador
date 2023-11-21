import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../database/firebase';
import { useFonts } from 'expo-font';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    Bold: require("../fonts/BoldItalic.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={['#19AF79', '#A4C1B7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <TextInput
        style={styles.Inputs}
        placeholder='Example@gmail.com'
        onChangeText={(email) => setEmail(email)}
        autoCapitalize='none'
        autoCorrect={false}
      />

      <TextInput
        style={styles.Inputs}
        placeholder='password'
        onChangeText={(password) => setPassword(password)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
      >
        <Text style={styles.textButton}>Inicio de sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ResetPasswordScreen')}
        style={styles.button}
      >
        <Text style={styles.textButton}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateUsersScreen')}
        style={styles.button}
      >
        <Text style={styles.textButton}>Crear cuenta</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: '#4D4197',
    marginTop: 10,
  },
  Inputs: {
    borderWidth: 1.5,
    padding: 15,
    width: '80%',
    marginTop: 55,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Bold'
  },
  recuperarPassword: {
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
  },
  textButton: {
    fontSize: 18,
    color: '#000000',
    marginTop: 10,
    fontFamily: 'Bold'
  },
  button: {
    marginTop: 35,
    width: '50%',
    backgroundColor: '#1EBA82',
    borderRadius: 40,
    padding: 15,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  logo: {
    marginTop: 20,
    width: '33%',
    height: '15%'
  },
});