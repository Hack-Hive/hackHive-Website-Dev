// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz9g4hgYrgNrUAYuIOP5pN4PY8N6Um3Uk",
  authDomain: "hackhive-70a47.firebaseapp.com",
  projectId: "hackhive-70a47",
  storageBucket: "hackhive-70a47.appspot.com",
  messagingSenderId: "606738401254",
  appId: "1:606738401254:web:a5647d22e009701eb8f827",
  measurementId: "G-637SXN60FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
// const analytics = getAnalytics(app);