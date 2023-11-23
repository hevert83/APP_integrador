import "react-native-gesture-handler"
import Navigation from "./Navigation"
import React,{useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {firebase} from './database/firebase'

//Navegacion de pantallas
import Header from "./Components/Header";
import CreateUsersScreen from "./Screens/CreateUsersScreen";
import LoginScreen from "./Screens/LoginScreen";
import ResetPasswordScreen from "./Screens/ResetPasswordScreen";

    const Stack = createNativeStackNavigator();

function App() {

    const [initializing,setInitializing] = useState(true);
    const [user,setUser] = useState();


    function onAuthStateChanged(user){
        setUser(user);
        if (initializing) setInitializing(false); 
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;
         
    if (!user) {
        return(
           <Stack.Navigator >
            <Stack.Screen name=" " component={LoginScreen}
             options={{
                headerTitle: () => <Header name=" "/>,
                    headerStyle: {}, headerShown:false}}
            />

                <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
                options={{
                headerTitle: () => <Header name="Login"/>,
                headerStyle: {
                    //height: 150,
                    //borderBottomLeftRadius:50,
                    //borderBottomRightRadius:50,
                   // backgroundColor: '#000',
                    //elevation: 25
                } 
                  ,}}
                  
               />

               <Stack.Screen
                name="CreateUsersScreen"
                component={CreateUsersScreen}
                options={{
                headerTitle: () => <Header name="Login"/>,
                    headerStyle: {
                        //height: 150,
                        //borderBottomLeftRadius:50,
                        //borderBottomRightRadius:50,
                       // backgroundColor: '#000',
                        //elevation: 25
                    } 
                  ,}}
                  
               />
            
           </Stack.Navigator>
        )
    }

    return(
        <Navigation/>
    )
}   

export default () =>{
    return(
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    )
}
