// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyBygMlkt3joQmGfanhEXw635CCGT174OG8",
  authDomain: "clone-r22.firebaseapp.com",
  projectId: "clone-r22",
  storageBucket: "clone-r22.appspot.com",
  messagingSenderId: "1078826477310",
  appId: "1:1078826477310:web:e16153ff80338e11b7a7af",
  measurementId: "G-78HN3P7ME2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { db, auth };
