// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAihc_bqZbMxhwH23doXvL9uvQxJZcCL_o",
  authDomain: "chat-app-aab48.firebaseapp.com",
  projectId: "chat-app-aab48",
  storageBucket: "chat-app-aab48.appspot.com",
  messagingSenderId: "576860910318",
  appId: "1:576860910318:web:7ecfe2c0fa149e6e1039ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);