import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput,StyleSheet,Image,Text,TouchableOpacity} from "react-native";
import {firebase} from '../database/firebase'
import { useFonts } from 'expo-font';
import vigenereCipher from '../Encrypt/Encyption';



const CreateUsersScreen = () => {

  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] =useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  
  

  const [fontsLoaded] = useFonts({
    Bold: require("../fonts/BoldItalic.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  registerUser = async(userName, email, password, phone,confirmPassword) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,10}$/;

    if (regex.test(password)){
      if (password == confirmPassword){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
              handleCodeInApp:true,
              url:'https://eco-innovation.firebaseapp.com',
            })
            .then(() => {
              alert('Email de verificación enviado')
            })
            .catch((error) => {
              alert(error.message)
            })
            .then(() => {
              const encryptedEmail = vigenereCipher(email);
              const encryptedPassword = vigenereCipher(password);
      
              firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                  userName,
                  email: encryptedEmail, // Guardar el email cifrado en Firestore
                  password: encryptedPassword, // Guardar la contraseña cifrada en Firestore
                  phone
                })
            })
            .catch((error) => {
              alert(error.message)
            })
          })
          .catch((error => {
            alert(error.message)
          }))
        }else{
          alert('Las contraseñas no coinciden')
        } 
    }else{
      alert('Debes asignar una contraseña con combinaciones de números y letras y entre 6 y 10 caracteres')
    }

     
}

    
    return (
      <LinearGradient style={styles.container}
      colors={['#19AF79','#A4C1B7']}
      start={{x:0.9 , y:0.5}}
      end={{x:1, y:1}}
      >
  
     <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
  
      <Text style={styles.title}>Ingresa tus datos</Text>
        <TextInput  placeholder='Nombre de Usuario'
                    style={styles.textInput} onChangeText={(value) => setUserName(value)} />
        <TextInput  placeholder='Correo electrónico' 
                    style={styles.textInput} onChangeText={(value) => setEmail(value)}/>
        <TextInput  placeholder='Contraseña' 
                    style={styles.textInput} 
                    secureTextEntry={true} onChangeText={(value) => setPassword(value)}/>
        <TextInput  placeholder='Confirmar contraseña'
                    style={styles.textInput} 
                    secureTextEntry={true}  onChangeText={(value) => setConfirmPassword(value)}/>
        <TextInput  placeholder='Número celular' 
                    style={styles.textInput} onChangeText={(value) => setPhone(value)} />
  

    <TouchableOpacity 
    onPress={() => registerUser(userName, email, password, phone, confirmPassword)}
    style={styles.button}>
        <Text style={styles.textButton}>Crear cuenta</Text>
    </TouchableOpacity>
       
 
        
        
      </LinearGradient>
    )
}

export default CreateUsersScreen

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
    fontFamily: 'Bold'
  },

  textInput:{
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor:'#fff',
    marginTop: 20,
    fontFamily: 'Bold'
  },
  logo:{
    marginTop: 20,
    width:'30%',
    height: '15%'
    
  },
  textButton :{
    fontSize:13,
    color:'#000000',
    marginTop:10,
    fontFamily: 'Bold'
    } ,

    button:{
      marginTop:35,
      width:'50%',
      backgroundColor:'#1EBA82',
      borderRadius:40,
      padding:15,
      borderWidth: 1.5,
      alignItems:'center',
      fontFamily: 'Bold'
      },
});