import { View, Text ,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native'
import React,{useState, useEffect,}from 'react'
import { firebase } from '../database/firebase'
import { LinearGradient } from 'expo-linear-gradient'

const ResetPasswordScreen = () => {

    const [name, setName] = useState([]);
    const [email,setEmail] = useState('')
    
    const changePassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Password reset enviada")
        }).catch((error) => {
            alert(error)
        })
    }
    
  return (

    <LinearGradient style={styles.container}
    colors={['#19AF79','#A4C1B7']}
    start={{x:0 , y:0}}
    end={{x:0, y:0.9}}>

<Image source={require('../assets/logo.png')} style={styles.logo}></Image>
      
<Text style={styles.title}>Recupera tu constraseña</Text>

<Text style={styles.description}>
  Podemos enviarte notificaciones por correo con fines de seguridad e inicio de sesión
</Text>

<TextInput style={styles.inputs} placeholder="Correo electrónico" onChangeText={(value) => setEmail(value)}/>

<TouchableOpacity onPress={() => changePassword(email)} style={styles.button}>
  <Text style={styles.buttonText}>Enviar</Text>
</TouchableOpacity>

     

      </LinearGradient>

  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 40,
      color: '#000',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    description: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
      marginBottom: 20,
    },
    inputs: {
      borderWidth: 1.5,
      padding: 15,
      width: '100%',
      marginTop: 0,
      borderRadius: 30,
      backgroundColor: '#FFFFFF',
      fontFamily: 'Bold'
    },
    button: {
      backgroundColor: '#00B894',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo:{
      marginTop: 0,
      width:'30%',
      height: '14%'
      
    },
  });