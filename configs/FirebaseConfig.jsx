// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFV8UT8uHTM99mUmDJQkVtL0MDCIxo3BQ",
  authDomain: "business-directory-app-98c2f.firebaseapp.com",
  projectId: "business-directory-app-98c2f",
  storageBucket: "business-directory-app-98c2f.appspot.com",
  messagingSenderId: "661420161553",
  appId: "1:661420161553:web:45f8d3ae356d18c0e60fb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)