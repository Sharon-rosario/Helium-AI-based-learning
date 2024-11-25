// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB5rJjy3jQj11ObfYJ5O8pcMRTpoSPqUHE",
//   authDomain: "webphonenotification.firebaseapp.com",
//   projectId: "webphonenotification",
//   storageBucket: "webphonenotification.appspot.com",
//   messagingSenderId: "412799410040",
//   appId: "1:412799410040:web:92d5c0a09c0fac5b5ef28d",
//   measurementId: "G-C37NNWSN16"
// };

// Helium  
const firebaseConfig = {
  apiKey: "AIzaSyC-6Twa5RWQpMUmr9sg2z8V4BaHm-seQJA",
  authDomain: "helium-learning.firebaseapp.com",
  projectId: "helium-education",
  storageBucket: "helium-education.appspot.com",
  messagingSenderId: "952171986107",
  appId: "1:952171986107:android:b523db77aa9ff4e6477d9e",
  measurementId: "G-22ZY19GZ7C"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)