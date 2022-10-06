// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsPTANaw0z1O8kCZ9jg8gFwe87q0W9AoA",
  authDomain: "reactjs-coderhouse-5c299.firebaseapp.com",
  projectId: "reactjs-coderhouse-5c299",
  storageBucket: "reactjs-coderhouse-5c299.appspot.com",
  messagingSenderId: "518548081567",
  appId: "1:518548081567:web:141accc4f131f006b68baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db