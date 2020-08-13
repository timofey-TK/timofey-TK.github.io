import firebase from 'firebase/app'
import 'firebase/firestore'
//Paste in your firebase config we copied from the last step
var firebaseConfig = {  
  apiKey: "AIzaSyAFCL82LdpimkyWBvcJy_IfUVTzbsVE7KQ",
    authDomain: "tasksproject-4a019.firebaseapp.com",
    databaseURL: "https://tasksproject-4a019.firebaseio.com",
    projectId: "tasksproject-4a019",
    storageBucket: "tasksproject-4a019.appspot.com",
    messagingSenderId: "1004210464313",
    appId: "1:1004210464313:web:8a648cc9b2818893790fe8",
    measurementId: "G-B2ZSBWX46Z"
};
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()