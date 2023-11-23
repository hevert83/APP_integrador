import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { WebView } from 'react-native-webview';






const InfoReciclaje = () => {
  return (
 
    <WebView
    source={{ uri: 'https://www.recytrans.com/blog/que-es-el-reciclaje/' }}
    style={{ flex: 1 }} 
  />
  );
}

export default InfoReciclaje

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