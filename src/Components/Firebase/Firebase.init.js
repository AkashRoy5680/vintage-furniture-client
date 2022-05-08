// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9a9VB823uFu4c5EW6r3C1BI-YzpZlR70",
  authDomain: "furniture-management-fab4b.firebaseapp.com",
  projectid: "furniture-management-fab4b",
  storageBucket: "furniture-management-fab4b.appspot.com",
  messagingSenderid: "898675896450",
  appid: "1:898675896450:web:fadd09253871b2d934849b",
  /*apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectid:process.env.REACT_APP_projectid,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderid:process.env.REACT_APP_messagingSenderid,
  appid:process.env.REACT_APP_appid,*/
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
