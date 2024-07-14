// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fbc42.firebaseapp.com",
  projectId: "mern-blog-fbc42",
  storageBucket: "mern-blog-fbc42.appspot.com",
  messagingSenderId: "829431028775",
  appId: "1:829431028775:web:dcfd75b159a44753f2c202",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
