// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQSFUrhokClQWFq1rMkwMmPYsFaAkkl-w",
  authDomain: "react-native-coneccion.firebaseapp.com",
  projectId: "react-native-coneccion",
  storageBucket: "react-native-coneccion.appspot.com",
  messagingSenderId: "902778518881",
  appId: "1:902778518881:web:42df90dd36b74c69b25920"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};