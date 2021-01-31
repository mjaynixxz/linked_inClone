// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPw8425meq6YlWrRWJtFJaeSHJO8bQXOA",
  authDomain: "linkedin-clone-8e2bf.firebaseapp.com",
  projectId: "linkedin-clone-8e2bf",
  storageBucket: "linkedin-clone-8e2bf.appspot.com",
  messagingSenderId: "746989481976",
  appId: "1:746989481976:web:8b869cafd6170ec675700d",
  measurementId: "G-WQ8WN5LTMN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
