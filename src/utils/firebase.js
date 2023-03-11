import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHUMoBus1-MFNmC5lW0ofc2dYOMaqVuKw",
  authDomain: "coffee-project-fb90f.firebaseapp.com",
  databaseURL:
    "https://coffee-project-fb90f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coffee-project-fb90f",
  storageBucket: "coffee-project-fb90f.appspot.com",
  messagingSenderId: "958953967996",
  appId: "1:958953967996:web:00ca8cc0135b039057d4f9",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
