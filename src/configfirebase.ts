// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFSc9pQkNAX1-kRTLeE8Ih6gNqYNo24LU",
  authDomain: "projet-34058.firebaseapp.com",
  projectId: "projet-34058",
  storageBucket: "projet-34058.firebasestorage.app",
  messagingSenderId: "729529263865",
  appId: "1:729529263865:web:dcfc23f18634266186e428",
  measurementId: "G-Y4WQLQPMYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);