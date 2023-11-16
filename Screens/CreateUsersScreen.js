import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet} from "react-native";


import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, collectionGroup} from 'firebase/firestore';
import initializeApp, {  } from "../database/firebase";


const db = getFirestore(initializeApp);


const CreateUsersScreen = () => {

    const [state, setState] = useState({ //creamos los campos para guardar la informacion del ususario
        name: '',
        email: '',
        password: '',
        passwordc: '',
        phone: ''
    })

    const handleChangeText = (name, value) => { //guardamos la informacion de los ususarios a los campos creados
        setState({...state, [name]: value})
    }



    const saveNewUser = async () => {
  if (state.name === '') {
    alert('Por favor, escribe un nombre');
  } else if(state.password === state.passwordc){
    try {
      const nota = {
        name: state.name,
        email: state.email,
        password: state.password,
        passwordc: state.passwordc,
        phone: state.phone
      }
      await addDoc(collection(db, 'usuarios'), {
        ...nota
      });
      alert('Guardado');
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      alert('Hubo un error al guardar el usuario');
    }
  } else{
    alert('Las contraseñas no coinciden');
  }
};


    return (
        <ScrollView>
            <View>
                <TextInput placeholder="Name user" onChangeText={(value) => handleChangeText('name', value)}/>
            </View>
            <View>
                <TextInput placeholder="Email user" onChangeText={(value) => handleChangeText('email', value)}/>
            </View>
            <View>
                <TextInput placeholder="Password" onChangeText={(value) => handleChangeText('password', value)}/>
            </View>
            <View>
                <TextInput placeholder="Password confirm" onChangeText={(value) => handleChangeText('passwordc', value)}/>
            </View>
            <View>
                <TextInput placeholder="Phone user" onChangeText={(value) => handleChangeText('phone', value)}/>
            </View>
            <View>
                <Button title='Añadir ususario' onPress={() => saveNewUser()}/>
            </View>
        </ScrollView>
    )
}

export default CreateUsersScreen