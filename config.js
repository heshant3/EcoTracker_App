// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW7zRBq3-Vepl9NPgmqL948aLpaFHjd-4",
  authDomain: "ecotracker-fba2e.firebaseapp.com",
  databaseURL: "https://ecotracker-fba2e-default-rtdb.firebaseio.com",
  projectId: "ecotracker-fba2e",
  storageBucket: "ecotracker-fba2e.appspot.com",
  messagingSenderId: "343312332501",
  appId: "1:343312332501:web:49c25de4078c7375f6d45c",
  measurementId: "G-6Y224RDZCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
