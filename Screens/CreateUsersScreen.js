import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet} from "react-native";
import {firebase} from '../database/firebase'



const db = firebase;


const CreateUsersScreen = () => {

  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] =useState('')

  registerUser = async(userName,email,password,phone) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp:true,
        url:'https://react-native-coneccion.firebaseapp.com',
      })
      .then(() =>{
        alert('Email de verificación enviado')
      }).catch((error) => {
        alert(error.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          userName,
          email,
          password,
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
  }  

    
    return (
        <ScrollView>
            <View>
                <TextInput placeholder="Name user" onChangeText={(value) => setUserName(value)}/>
            </View>
            <View>
                <TextInput placeholder="Email user" onChangeText={(value) => setEmail(value)}/>
            </View>
            <View>
                <TextInput placeholder="Password" onChangeText={(value) => setPassword(value)}/>
            </View>
            <View>
                <TextInput placeholder="Password confirm"/>
            </View>
            <View>
                <TextInput placeholder="Phone user" onChangeText={(value) => setPhone(value)}/>
            </View>
            <View>
                <Button title='Añadir ususario' onPress={() => registerUser(userName, email, password, phone)}/>
            </View>
        </ScrollView>
    )
}

export default CreateUsersScreen