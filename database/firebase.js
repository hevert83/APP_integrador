// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmp5IRkir5f-0fzRftJQJ1DtOj1frLT1U",
  authDomain: "eco-innovation.firebaseapp.com",
  projectId: "eco-innovation",
  storageBucket: "eco-innovation.appspot.com",
  messagingSenderId: "472986923443",
  appId: "1:472986923443:web:89585336a53dda99c2dbc6"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};