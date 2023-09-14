// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_yozbKomgnCwg41CeSN2DEtYa_QCMH78",
  authDomain: "twitter-clone-5148b.firebaseapp.com",
  projectId: "twitter-clone-5148b",
  storageBucket: "twitter-clone-5148b.appspot.com",
  messagingSenderId: "9519748266",
  appId: "1:9519748266:web:355d0cae68ea420dd5acd3",
  measurementId: "G-2LM71GHLY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;