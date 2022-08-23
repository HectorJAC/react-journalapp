//Parecen ser una forma nueva de importar desde firebase
//import { initializeApp } from "firebase/app"; 
//import { getAuth } from 'firebase/auth'; 

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyD5T_WiHbJFudZI8nVmCp39tSO2FkoMEEw",
    authDomain: "curso-react-app-2dbc1.firebaseapp.com",
    projectId: "curso-react-app-2dbc1",
    storageBucket: "curso-react-app-2dbc1.appspot.com",
    messagingSenderId: "730975883073",
    appId: "1:730975883073:web:81fb943e8cc95c10c29bc0"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}