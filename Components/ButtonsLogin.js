
import react ,{useState} from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat';
import LoginScreen from '../Screens/LoginScreen';


 function Button () {
return(
   
    <TouchableOpacity 
    onPress={()  => LoginScreen}
    style={styles.button}>
        <Text style={styles.textButton}>Inicio de sesion</Text>
    </TouchableOpacity>
);
    
}
export default Button

const styles = StyleSheet.create({

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