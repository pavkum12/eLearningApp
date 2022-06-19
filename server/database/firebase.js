// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB50FljwZjOckYmjX1AhRFPqvnm0VJJL78",
  authDomain: "elearning-cfcca.firebaseapp.com",
  projectId: "elearning-cfcca",
  storageBucket: "elearning-cfcca.appspot.com",
  messagingSenderId: "1077628094267",
  appId: "1:1077628094267:web:d72fdb864318b5ae94d91e",
  measurementId: "G-M11ZT53VT3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
