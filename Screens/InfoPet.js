import React from "react";
import { StyleSheet, TextInput ,Text, View, Image,height } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function infPet(){
    return (
       
      <View style= {styles.recuadrologo}>
      <View style= {styles.recuadro} >

        <View style= {styles.overlay}>
          <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
        </View>
        
        <View>
         <Text style= {styles.title}> PET Trasparente</Text>
         <Text style= {styles.texto}> ________________________________________</Text>
        </View>

        <View>
         <Image
        style={styles.image}
        source={{
            uri: 'https://img.maspormas.com/2015/08/Reciclaje_PET-3.jpg',
          }} />
        </View>  

        <View>
         <Text style= {styles.texto}> El PET transparente es un plástico versátil y ampliamente utilizado en la fabricación de envases y botellas para una variedad de productos</Text>
        </View>

       </View>
       </View>);

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#61B38C'
    

      },

      recuadro:{
        flex: 1,
        backgroundColor: '#61B38C',
        width: '80%',
        height:'60%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 30,
        margin:40,
        marginTop: 200,
      },

      title:{
        fontSize :33,
        color:'#ffff', 
        fontWeight: 'bold',
       
      },
      texto:{
        fontSize:15 ,
        color:'#ffff',
        marginTop:20,
        
        
      },
      
      containerIMG: {
        paddingTop: 50,
      },
      tinyLogo: {
        borderRadius: 200, // Ajusta el valor del borderRadius para obtener la forma deseada
        overflow: 'hidden',
         width: 280, // Ajusta el tamaño de la imagen según tus necesidades
         height: 170, // Ajusta el tamaño de la imagen según tus necesidades
         margin:20,
      },
      logo: {
       width:80,
       height:80,
       marginLeft:10,
      // alignSelf: 'center',
      //// position: 'absolute',
      // top:45,
      },

      image: {
        borderRadius: 200, // Ajusta el valor del borderRadius para obtener la forma deseada
        overflow: 'hidden',
         width: 280, // Ajusta el tamaño de la imagen según tus necesidades
         height: 170, // Ajusta el tamaño de la imagen según tus necesidades
         margin:20,
       } ,
       recuadrologo:{
        flex: 1,
        backgroundColor: '#ffff',
       // width:80,
        //height:80,
       //marginLeft:10,

       }
    
})