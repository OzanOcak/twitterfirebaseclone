// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, getApp } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-cln-e06dd.firebaseapp.com",
  projectId: "twitter-cln-e06dd",
  storageBucket: "twitter-cln-e06dd.appspot.com",
  messagingSenderId: "1018174147531",
  appId: "1:1018174147531:web:95dbcc8c18f0a9dfcf844e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
