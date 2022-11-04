// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeFnsng39QeAPuoUABVnC99KqLFmslx8w",
  authDomain: "aula01-0909.firebaseapp.com",
  databaseURL: "https://aula01-0909-default-rtdb.firebaseio.com",
  projectId: "aula01-0909",
  storageBucket: "aula01-0909.appspot.com",
  messagingSenderId: "194045255751",
  appId: "1:194045255751:web:0a9201a2ab8209182b9162",
  measurementId: "G-SYG9RTG8SV"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;