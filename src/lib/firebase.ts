// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoTjMzT8fIif2Abg_Ug9O6tVeq8tccSr4",
  authDomain: "jalsuraksha-fea77.firebaseapp.com",
  projectId: "jalsuraksha-fea77",
  storageBucket: "jalsuraksha-fea77.appspot.com",
  messagingSenderId: "420932073711",
  appId: "1:420932073711:web:6d1e167680cad30959c31a",
  measurementId: "G-DQ83Y25WQW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      console.warn('Firestore offline persistence failed: failed-precondition. Multiple tabs open?');
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      console.warn('Firestore offline persistence failed: unimplemented. Browser not supported.');
    }
  });


export { db, auth };
