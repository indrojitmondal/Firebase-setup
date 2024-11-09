// Don't store config on the client side 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBye1aMZWqJXkTAQkSo5iNWx-YYgSPL68",
  authDomain: "simple-firebase-bbd46.firebaseapp.com",
  projectId: "simple-firebase-bbd46",
  storageBucket: "simple-firebase-bbd46.firebasestorage.app",
  messagingSenderId: "195453549561",
  appId: "1:195453549561:web:5838ddef80a8c8c1dbdb28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;