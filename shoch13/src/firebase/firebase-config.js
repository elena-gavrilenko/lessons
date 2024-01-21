// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-ZCShKazPwuhDqNPlieiMeCCq_rF5q8",
  authDomain: "todo-istep.firebaseapp.com",
  projectId: "todo-istep",
  storageBucket: "todo-istep.appspot.com",
  messagingSenderId: "940789768321",
  appId: "1:940789768321:web:e7498862fffb6f88946d80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);