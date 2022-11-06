import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAaMJ3r0-h8QvRBLALgLT8UkylxxmHygaE",
  authDomain: "bikemap-367719.firebaseapp.com",
  projectId: "bikemap-367719",
  storageBucket: "bikemap-367719.appspot.com",
  messagingSenderId: "613995951639",
  appId: "1:613995951639:web:e7848ba69006ac05f98e52",
  measurementId: "G-RXP59SWZGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};
