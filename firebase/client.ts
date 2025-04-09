// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb4n5G-2XcdIuxn3dzEHTaD9kAKjc7TS0",
  authDomain: "practicepal-beb0a.firebaseapp.com",
  projectId: "practicepal-beb0a",
  storageBucket: "practicepal-beb0a.firebasestorage.app",
  messagingSenderId: "66374387723",
  appId: "1:66374387723:web:5540118911e2eb89139f0e",
  measurementId: "G-CCDC47X5Z0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);