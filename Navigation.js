import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notificaciones from "./Screens/Notifaciones";
import HomeScreen from "./Screens/HomeScreen";
import Maps from "./Screens/MapScreen";
import InfoReciclaje from "./Screens/InfoReciclaje";
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import SingiOut from "./Screens/SingiOut";
import { firebase } from './database/firebase';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity,StyleSheet,Text} from "react-native";

const menu = createDrawerNavigator()
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function menuDrawer(){
  return(
    <menu.Navigator>
      
    </menu.Navigator>
  )
}


function TabTop() {

  return (
    <Tab.Navigator 
    screenOptions={{tabBarShowLabel:false}}>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{tabBarIcon:  () => <Entypo name="home" size={24} color="#4D4197" />}} />
      <Tab.Screen name="Notificaciones" component={Notificaciones}
       options={{tabBarIcon:  () => <Ionicons name="notifications" size={24} color="#4D4197" /> }}/>
      <Tab.Screen name="Maps" component={Maps}
      options={{tabBarIcon:  () => <Entypo name="location" size={24} color="#4D4197" />}} />
      <Tab.Screen name="Info" component={InfoReciclaje}
      options={{tabBarIcon:  () => <FontAwesome5 name="info-circle" size={24} color="#4D4197" />}}/>
    </Tab.Navigator>

  );
}

export default function Navigation() {

  const [fontsLoaded] = useFonts({
    Bold: require("./fonts/BoldItalic.ttf")
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    
    <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#19AF79'},
     headerTitleStyle:{
      fontSize:28,
      fontWeight:'400',
      fontFamily:'Bold'
     },
     headerRight: () => <TouchableOpacity onPress={() => firebase.auth().signOut()} >
     <Ionicons name="menu" size={40} color="black"/>
   </TouchableOpacity>
    }}>
    <Stack.Screen name="EcoInnovation" component={TabTop}  />
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
  button: {
    marginTop: 35,
    width: '50%',
    backgroundColor: '#1EBA82',
    borderRadius: 40,
    padding: 15,
    borderWidth: 1.5,
    alignItems: 'center',
  },

});