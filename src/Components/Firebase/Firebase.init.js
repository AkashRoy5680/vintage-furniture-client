// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9a9VB823uFu4c5EW6r3C1BI-YzpZlR70",
  authDomain: "furniture-management-fab4b.firebaseapp.com",
  projectId: "furniture-management-fab4b",
  storageBucket: "furniture-management-fab4b.appspot.com",
  messagingSenderId: "898675896450",
  appId: "1:898675896450:web:fadd09253871b2d934849b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;