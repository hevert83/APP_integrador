import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Svg, { Path } from "react-native-svg"
//import Button from './Components/ButtonsLogin.js';
//import Button2 from './Components/ButtonCreatAcount.js';

export default function App() {
  
  return (
    <LinearGradient style={styles.container}
    colors={['#19AF79','#A4C1B7']}
    start={{x:0 , y:0}}
    end={{x:0, y:0.9}}
    >
      <TextInput style={styles.Inputs} placeholder='heveraretagaa@gamil.com '/>
     
      <TextInput style={styles.Inputs} placeholder='password' secureTextEntry={true}/>

      <StatusBar style="auto" />

        <Text style={styles.recuperarContrasña}>¿Olvidaste tu contraseña?</Text>

     

      </LinearGradient>
  );
}

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
  }
});