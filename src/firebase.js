// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuCJT4uA2yUKna-kFLdOM09Wzdc3S_360",
  authDomain: "roxfordhealthcarecontact.firebaseapp.com",
  projectId: "roxfordhealthcarecontact",
  storageBucket: "roxfordhealthcarecontact.appspot.com",
  messagingSenderId: "920085684546",
  appId: "1:920085684546:web:3aa7da74054f0eee12a8db",
  measurementId: "G-5B34LHLVVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
