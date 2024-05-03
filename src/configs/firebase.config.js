import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4YsQ5GX8pMhGcBk7u0m7hPbLv6Z7QTT0",
  authDomain: "fir-194e6.firebaseapp.com",
  projectId: "fir-194e6",
  storageBucket: "fir-194e6.appspot.com",
  messagingSenderId: "992272668234",
  appId: "1:992272668234:web:b06064cacc7f001b23b8b3",
  measurementId: "G-K7QXX5FK1Y"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage()

export {firebaseApp, auth, db, storage}