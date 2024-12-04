// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3fFHSybGfsQ0fro2tqiaueB5RIktWJuc",
  authDomain: "fir-i-acf64.firebaseapp.com",
  projectId: "fir-i-acf64",
  storageBucket: "fir-i-acf64.firebasestorage.app",
  messagingSenderId: "827495757079",
  appId: "1:827495757079:web:627c91727c9eb8c3fbf352",
  measurementId: "G-LQ33BRPB7V"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp, analytics };
