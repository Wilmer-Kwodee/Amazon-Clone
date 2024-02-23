import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBR5IQFG1bDWesxlj3Wbt4z3cE0qAdaT1w",
    authDomain: "challenge-91ace.firebaseapp.com",
    projectId: "challenge-91ace",
    storageBucket: "challenge-91ace.appspot.com",
    messagingSenderId: "618573007480",
    appId: "1:618573007480:web:debe8aad56c5091959bb8d"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  
  export { db, auth };