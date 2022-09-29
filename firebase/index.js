// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjiEd9D4evGO69X6br1KesniVKTfwH2mk",
    authDomain: "fir-c1353.firebaseapp.com",
    projectId: "fir-c1353",
    storageBucket: "fir-c1353.appspot.com",
    messagingSenderId: "909286649781",
    appId: "1:909286649781:web:f59bba57db48ef7c6a73fc",
    measurementId: "G-ZW2V1T4CHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };