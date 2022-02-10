import firebase, { initializeApp } from "firebase/compat/app";

import 'firebase/compat/storage';

import 'firebase/compat/auth'

import  'firebase/compat/firestore';

import { ref as storageRef , uploadBytesResumable } from "firebase/storage";

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

export const imageupload = (image) =>{
   if (!image) return;
       const sotrageRef = storageRef(storage, `files/${image.name}`);
       return uploadBytesResumable(sotrageRef, image);
}

export const updateProduct= async (id, title, description, price, url) => {
   try{ 
   await db.collection('Products').doc(id).update({  title,
      description,
      price,
      url
      }); return "Success"; 
   } catch(err){
      return "error";
   }
}
export { fireDb, auth, db, storage };

   

