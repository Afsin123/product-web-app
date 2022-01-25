import firebase, { initializeApp } from "firebase/app";
//import "firebase/compat/database";
//import 'firebase/compat/firestore';
//import 'firebase/compat/storage';
//import 'firebase/compat/auth';
// import * as firebase from 'firebase';
import 'firebase/storage';
// import 'firebase/firestore';
import 'firebase/auth'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyCR49KHLRr1y_7QyxGNlXq5yazL8_7uFeI",
   authDomain: "crud-project-react-93a69.firebaseapp.com",
   projectId: "crud-project-react-93a69",
   storageBucket: "crud-project-react-93a69.appspot.com",
   messagingSenderId: "1059363411180",
   appId: "1:1059363411180:web:6841ed4f5f4c15ab4dc1c9"
};

const fireDb = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();



export  {fireDb, auth, db, storage};

