// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDXBYVhkORPfEW-Ko7lAwBM6qZbSUeWk9I",
  authDomain: "shelf-76b17.firebaseapp.com",
  projectId: "shelf-76b17",
  storageBucket: "shelf-76b17.appspot.com",
  messagingSenderId: "962435293457",
  appId: "1:962435293457:web:3f5f4b5dc9a2a34e63ecb0",
  measurementId: "G-JRS3XVNGFD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()


