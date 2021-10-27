import firebase from "firebase/app";
import '@firebase/firestore';
const app = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
if (!firebase.apps.length) {
    firebase.initializeApp(app);
  }
const getFirebase = () => app;
const getFirestore = () => firebase.firestore();
const getDate = () => firebase.firestore.Timestamp.fromDate(new Date())
export { getFirebase, getFirestore, getDate };