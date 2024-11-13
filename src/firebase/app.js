import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi0ehrHNxVsVLDfwRJRsxjyxEky6ZYZ0g",
  authDomain: "test-assignment-wondercraftz.firebaseapp.com",
  projectId: "test-assignment-wondercraftz",
  storageBucket: "test-assignment-wondercraftz.firebasestorage.app",
  messagingSenderId: "999920469408",
  appId: "1:999920469408:web:32e083a99508eba039d0c5",
  measurementId: "G-FXE66XTFN5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
