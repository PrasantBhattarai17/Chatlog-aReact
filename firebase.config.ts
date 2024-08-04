import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFjr320TJAM4Gi0szFqrR-iqckBLK9Vho",
  authDomain: "connectifyareact.firebaseapp.com",
  projectId: "connectifyareact",
  storageBucket: "connectifyareact.appspot.com",
  messagingSenderId: "675153867539",
  appId: "1:675153867539:web:5f898bbba742ae1ecee0e6"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASS_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB  = getFirestore(FIREBASE_APP);