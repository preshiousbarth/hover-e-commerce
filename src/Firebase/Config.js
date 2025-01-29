import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ9GCV7eMWZJauWd6J5gXbAac0B4Ujm6A",
  authDomain: "e-commerce-898c1.firebaseapp.com",
  projectId: "e-commerce-898c1",
  storageBucket: "e-commerce-898c1.firebasestorage.app",
  messagingSenderId: "501853513630",
  appId: "1:501853513630:web:1c3cf5f15a501f8b9fd88f",
  measurementId: "G-36HF8JMDVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;