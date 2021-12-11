// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIh6JjZJzg4ckdxDhwJCHpmtj_VLmlLic",
    authDomain: "ubereatsclone-72f63.firebaseapp.com",
    projectId: "ubereatsclone-72f63",
    storageBucket: "ubereatsclone-72f63.appspot.com",
    messagingSenderId: "694565673346",
    appId: "1:694565673346:web:286b19beb52642172ed79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const database = getDatabase(app);
export const firestore = getFirestore(app);

