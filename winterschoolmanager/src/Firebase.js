import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB9vreTJDX_ZXnTltFkN4QDc5FH0pTQA0k",
  authDomain: "winterschool-bbe1a.firebaseapp.com",
  projectId: "winterschool-bbe1a",
  storageBucket: "winterschool-bbe1a.appspot.com",
  messagingSenderId: "674743780628",
  appId: "1:674743780628:web:2b6ed23f9b729166f2ee01",
  measurementId: "G-FRD76X0ZML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
