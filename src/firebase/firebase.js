// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';//<--this imports authentication
import { getFirestore } from "firebase/firestore"; //<--this imports Firestore to store my fields...I think?
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_b_a_ZZOHyTPcE4_G2GjOc4KBs8vxQVs",
    authDomain: "buzzsmart-1d1ab.firebaseapp.com",
    projectId: "buzzsmart-1d1ab",
    storageBucket: "buzzsmart-1d1ab.appspot.com",
    messagingSenderId: "1060961672674",
    appId: "1:1060961672674:web:cea642b9c20447cfadadbb",
    measurementId: "G-65K3M7RLXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };