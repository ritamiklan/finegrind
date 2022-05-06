import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_PROJECT_ID,
} from "./config";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBHUMoBus1-MFNmC5lW0ofc2dYOMaqVuKw",
  authDomain: "coffee-project-fb90f.firebaseapp.com",
  projectId: "coffee-project-fb90f",
  storageBucket: "coffee-project-fb90f.appspot.com",
  messagingSenderId: "958953967996",
  appId: "1:958953967996:web:00ca8cc0135b039057d4f9",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
