import firebase, { initializeApp } from "firebase/app";
import "firebase/database";


const firebaseConfig = {
   apiKey: "AIzaSyCR49KHLRr1y_7QyxGNlXq5yazL8_7uFeI",
   authDomain: "crud-project-react-93a69.firebaseapp.com",
   projectId: "crud-project-react-93a69",
   storageBucket: "crud-project-react-93a69.appspot.com",
   messagingSenderId: "1059363411180",
   appId: "1:1059363411180:web:6841ed4f5f4c15ab4dc1c9"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

