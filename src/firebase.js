// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC7IeFATDyXe8haYe05zG-Tnfm5EB2LrYc",
    authDomain: "linkedin-clone-16337.firebaseapp.com",
    projectId: "linkedin-clone-16337",
    storageBucket: "linkedin-clone-16337.appspot.com",
    messagingSenderId: "175598768941",
    appId: "1:175598768941:web:5fc006a5ed2b63aee139a4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };