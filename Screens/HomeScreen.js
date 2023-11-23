import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase } from '../database/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';


const HomeScreen = () => {


  const [name, setName] = useState('');

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('El usuario existe');
        }
      });
  }, []);

  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Merriweather-Light.ttf"),
    Mbold: require("../fonts/Merriweather-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['#19AF79', '#A4C1B7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>¿Sabías que?</Text>
        </View>
      </View>

      <Text style={styles.text}>
        Más del 60% de residuos que acaban en la basura general, podrían reciclarse
      </Text>

    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 20,
    fontFamily:'Regular'
  },
  text: {
    fontSize: 30,
    textAlign: 'auto',
    marginBottom: 40,
    fontFamily:'Mbold'
  },
  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
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
  textButton: {
    fontSize: 18,
    color: '#000000',
    marginTop: 10,
  },
});