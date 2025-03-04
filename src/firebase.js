// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGQwKKPgv1PNUmsse1ypxgota428ZNzO0",
  authDomain: "paste-and-share.firebaseapp.com",
  projectId: "paste-and-share",
  storageBucket: "paste-and-share.firebasestorage.app",
  messagingSenderId: "602572037419",
  appId: "1:602572037419:web:6f073a1a6daf83c81bf96e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc, getDoc, doc, where, query, getDocs };
