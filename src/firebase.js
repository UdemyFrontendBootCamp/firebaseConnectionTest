import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD6LdxvBKUdsZMru_-GmLb03nhBO5fX0o",
  authDomain: "react-http-fe687.firebaseapp.com",
  databaseURL: "https://react-http-fe687-default-rtdb.firebaseio.com",
  projectId: "react-http-fe687",
  storageBucket: "react-http-fe687.appspot.com",
  messagingSenderId: "617315825596",
  appId: "1:617315825596:web:ed0864884d4e69285a1db9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
