import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient style={styles.container}
    colors={['#19AF79','#A4C1B7']}
    start={{x:0.9 , y:0.5}}
    end={{x:1, y:1}}
    >
    
      <Text style={styles.title} >Inicio de sesion</Text>

      <Text style={styles.subTitle} >Nobre de usuario o Correo</Text>

      <TextInput style={styles.Inputs} placeholder='ManuZGuzCNL/heveraretagaa@gamil.com '
                  
      ></TextInput>
     

      <Text style={styles.subTitle} >Contraseña </Text>

      <TextInput style={styles.Inputs} placeholder='password'
      ></TextInput>

      <StatusBar style="auto" />
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
  },
  Inputs:{
    borderWidth: 1,
    padding: 10,
    width:'80',
    marginTop: 20,
    borderRadius:30,
  },
 
});
