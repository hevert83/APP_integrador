import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase } from '../database/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const SingiOut = () => {

    const navigation = useNavigation();

  return (
    <LinearGradient
    style={styles.container}
    colors={['#19AF79', '#A4C1B7']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 0.9 }}
  >

    <TouchableOpacity onPress={() => firebase.auth().signOut()} style={styles.button}>
      <Text style={styles.textButton}>Cerrar sesión</Text>
    </TouchableOpacity>

  </LinearGradient>
  );
}

export default SingiOut

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