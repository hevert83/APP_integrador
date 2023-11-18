import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {firebase} from '../database/firebase'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  
const{name,setName} = useState('')

  useEffect(()=> {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if (snapshot.exists) {
        setName(snapshot.data())
      }else{
        console.log('El usuario no existe')
      }
    })
  }, [])


  return (
    <LinearGradient style={styles.container}
    colors={['#19AF79','#A4C1B7']}
    start={{x:0 , y:0}}
    end={{x:0, y:0.9}}
    >

     <SafeAreaView>
      <Text style={{fontSize:20,fontWeight:'bold'}}>
          Hola y Bienvenido 
      </Text>
     </SafeAreaView>

     <TouchableOpacity 
    onPress={()  => firebase.auth().signOut()}
    style={styles.button}>
        <Text style={styles.textButton}>Cerrar sesion</Text>
    </TouchableOpacity>
    
      </LinearGradient>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize :40,
    color:'#000', 
    fontWeight: 'bold',
  },
  subTitle:{
    fontSize:20,
    color:'#4D4197',
    marginTop:10,
  },
  Inputs:{
    borderWidth: 1.5,
    padding: 15,
    width:'80%',
    marginTop: 55,
    borderRadius:30,
    backgroundColor:'#FFFFFF',
    
  },

  recuperarContrasña:{
    fontSize:20,
    color:'#000000',
    marginTop:10,
  },
  textButton :{
    fontSize:18,
    color:'#000000',
    marginTop:10,
    } ,
  
    button:{
      marginTop:35,
      width:'50%',
      backgroundColor:'#1EBA82',
      borderRadius:40,
      padding:15,
      borderWidth: 1.5,
      alignItems:'center',
      }
});