import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notificaciones from "./Screens/Notifaciones";
import HomeScreen from "./Screens/HomeScreen";
import Maps from "./Screens/Maps";
import InfoReciclaje from "./Screens/InfoReciclaje";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabTop() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notificaciones" component={Notificaciones} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Info" component={InfoReciclaje}/>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EcoInnovation" component={TabTop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}