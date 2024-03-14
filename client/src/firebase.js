// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "eliteestate-c4850.firebaseapp.com",
  projectId: "eliteestate-c4850",
  storageBucket: "eliteestate-c4850.appspot.com",
  messagingSenderId: "1054715691369",
  appId: "1:1054715691369:web:2d2b75a4c9c1bdff4dbdf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);