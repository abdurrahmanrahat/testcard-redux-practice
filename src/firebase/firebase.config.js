// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdE9sFpywIOaDB3p12HnTvKoi9sbvob0E",
    authDomain: "task-redux-rtk.firebaseapp.com",
    projectId: "task-redux-rtk",
    storageBucket: "task-redux-rtk.appspot.com",
    messagingSenderId: "609080697971",
    appId: "1:609080697971:web:5522e36aa602f740097606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;