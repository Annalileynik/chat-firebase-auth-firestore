// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC98-SvScJ4MnO2NuBL_2aPNNZJIWUJCRU",
    authDomain: "chart-f1be1.firebaseapp.com",
    projectId: "chart-f1be1",
    storageBucket: "chart-f1be1.appspot.com",
    messagingSenderId: "596034360239",
    appId: "1:596034360239:web:4c81d7cc39a58bdc1c155a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);