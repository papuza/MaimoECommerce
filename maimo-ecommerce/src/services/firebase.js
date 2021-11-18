import firebase from "firebase/app";
import '@firebase/firestore';

//Trae todos los datos de mi .env. Con tener el .env en mi raiz, ya puedo traerme todas sus variables a mi frontend
const app = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

//Si ya está inicializada la app en la memoria, te la guarda. 
if (!firebase.apps.length) {
    firebase.initializeApp(app);
  }

//Traer data
const getFirebase = () => app;

//Traer la base de datos
const getFirestore = () => firebase.firestore();

//Helper para guardar la fecha 
const getDate = () => firebase.firestore.Timestamp.fromDate(new Date())

//Exportar las funciones
export { getFirebase, getFirestore, getDate };