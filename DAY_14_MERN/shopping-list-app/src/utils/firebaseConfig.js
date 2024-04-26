// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFZV-AsSwagpzi-PPs-BKZe1JRuc3Sxhk",
  authDomain: "shoppinglistapp-9f88a.firebaseapp.com",
  projectId: "shoppinglistapp-9f88a",
  storageBucket: "shoppinglistapp-9f88a.appspot.com",
  messagingSenderId: "298797702623",
  appId: "1:298797702623:web:1bd550727e4c7ef77ff86a",
  measurementId: "G-61QEN80T1F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);