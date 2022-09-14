// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI2nPEfCtVp63jf4sWzK5p1AqoaJl1B-g",
  authDomain: "router-firebase-integrat-c4460.firebaseapp.com",
  projectId: "router-firebase-integrat-c4460",
  storageBucket: "router-firebase-integrat-c4460.appspot.com",
  messagingSenderId: "499113621975",
  appId: "1:499113621975:web:a5e538b1d9767efc9e7392",
  measurementId: "G-14C398SVFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;