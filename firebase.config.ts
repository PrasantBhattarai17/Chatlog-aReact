import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFjr320TJAM4Gi0szFqrR-iqckBLK9Vho",
  authDomain: "connectifyareact.firebaseapp.com",
  projectId: "connectifyareact",
  storageBucket: "connectifyareact.appspot.com",
  messagingSenderId: "675153867539",
  appId: "1:675153867539:web:5f898bbba742ae1ecee0e6"
};

// Initialize Firebase app
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with React Native Persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
export const FIREBASE_DB  = getFirestore(FIREBASE_APP);
