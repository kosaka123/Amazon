import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOe0toFebblgBZheVy4Hm7mw1EYMcIcd8",
  authDomain: "clone-5bcf3.firebaseapp.com",
  databaseURL: "https://clone-5bcf3.firebaseio.com",
  projectId: "clone-5bcf3",
  storageBucket: "clone-5bcf3.appspot.com",
  messagingSenderId: "867441873282",
  appId: "1:867441873282:web:4a338357c552b8fd067f9b",
  measurementId: "G-1557JM2716",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
