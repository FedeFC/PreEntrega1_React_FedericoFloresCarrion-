// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb9SUeMIY_r7MFtP5eRySa0Fi7WMaaxdQ",
  authDomain: "ecommerce-76978.firebaseapp.com",
  projectId: "ecommerce-76978",
  storageBucket: "ecommerce-76978.appspot.com",
  messagingSenderId: "734939792014",
  appId: "1:734939792014:web:d2d2c712b3ee11fbddffdf",
  measurementId: "G-E8F4VFYYC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);