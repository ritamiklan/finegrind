import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "./config";

const firebaseConfig = {
  apiKey: config.FB_APIKEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DB_URL,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MSG_SENDER_ID,
  appId: config.APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
