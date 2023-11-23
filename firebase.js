// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHhkf_9tr40aOpP2zQb1dx7O57ytw-5Yo",
  authDomain: "next-uber-clone-d550a.firebaseapp.com",
  projectId: "next-uber-clone-d550a",
  storageBucket: "next-uber-clone-d550a.appspot.com",
  messagingSenderId: "852421063539",
  appId: "1:852421063539:web:351d2ee96160974667cb06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }