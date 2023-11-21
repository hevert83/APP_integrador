import react from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { WebView } from 'react-native-webview';


const MapScreen  = () => {
  
  return (
   

    <WebView
      source={{ uri: 'https://www.google.com.mx/maps/search/Mixquiahuala+de+Juárez,+Hgo.+centro+de+acopio/@20.2306671,-99.2408391,14z/data=!3m1!4b1?entry=ttu' }}
      style={{ flex: 1 }} 
    />

    

    
    
  );
}

export default MapScreen

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