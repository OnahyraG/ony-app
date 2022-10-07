import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaSi7zso6gMfxVDzVmsaNqNl2tKrewmYE",
  authDomain: "ony-app-74d62.firebaseapp.com",
  projectId: "ony-app-74d62",
  storageBucket: "ony-app-74d62.appspot.com",
  messagingSenderId: "38209725998",
  appId: "1:38209725998:web:53a203639fad297bf561bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db