import react from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { WebView } from 'react-native-webview';

export default function NotificacionesScreen() {
  
  return (
    //<LinearGradient style={styles.container}
    //colors={['#19AF79','#A4C1B7']}
    //start={{x:0 , y:0}}
    //end={{x:0, y:0.9}}
    //>
      <WebView
      source={{ uri: 'https://www.eltiempo.com/noticias/reciclaje' }}
      style={{ flex: 1 }} 
    />

     

    
      //</LinearGradient>
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