// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV82KmihIx_wIlkva98cqWvnjVaJcDAMc",
  authDomain: "expense-tracker-582c7.firebaseapp.com",
  projectId: "expense-tracker-582c7",
  storageBucket: "expense-tracker-582c7.appspot.com",
  messagingSenderId: "534373049485",
  appId: "1:534373049485:web:7e75fe86f8b17db1c7aec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);