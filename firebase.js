// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6MoLnpopjXj7ykbcT97eLFoEL-HgF5Ds",
  authDomain: "card-games-6992c.db.com",
  projectId: "card-games-6992c",
  storageBucket: "card-games-6992c.appspot.com",
  messagingSenderId: "92164680985",
  appId: "1:92164680985:web:7d14664a8c5b1790c12988",
  measurementId: "G-L11E6Q7RLZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const database = getDatabase(app);
export { db, database }
