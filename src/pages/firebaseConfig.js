import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

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
const db = getFirestore(app);

export {db};