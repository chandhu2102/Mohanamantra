
// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // If you use Firestore
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-ymlxf2ET66br4xvvHwU3GDLXKVH9-6g",
  authDomain: "mohana-mantra-2023.firebaseapp.com",
  databaseURL: "https://mohana-mantra-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mohana-mantra-2023",
  storageBucket: "mohana-mantra-2023.appspot.com",
  messagingSenderId: "291162306990",
  appId: "1:291162306990:web:406a8c3aaf2728d631f03f",
  measurementId: "G-J3H6FNMCQL"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore(); // If you use Firestore
export const database = firebase.database(); 
export default firebase;




