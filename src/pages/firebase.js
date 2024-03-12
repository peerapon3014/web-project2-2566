// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrI53ne-KolsB2cNE0Z_MRtjskGD2SIVU",
  authDomain: "web-project2-peerapon.firebaseapp.com",
  projectId: "web-project2-peerapon",
  storageBucket: "web-project2-peerapon.appspot.com",
  messagingSenderId: "1071462722080",
  appId: "1:1071462722080:web:733ca0364aa48ecb4d2a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
