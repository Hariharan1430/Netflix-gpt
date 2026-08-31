// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv1apkSWWdnsQzuNvEgdNadXjRHhuh02A",
  authDomain: "netfilx-gpt-7a1c4.firebaseapp.com",
  projectId: "netfilx-gpt-7a1c4",
  storageBucket: "netfilx-gpt-7a1c4.firebasestorage.app",
  messagingSenderId: "12308984202",
  appId: "1:12308984202:web:46d2825481a21904359873",
  measurementId: "G-8GZZD49EQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
 export const signupInProgress = { current: false };