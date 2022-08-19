import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJMDEgPX9GI5dzYqWvdCG9wRSx8_uj_fo",
    authDomain: "auth-2a55f.firebaseapp.com",
    projectId: "auth-2a55f",
    storageBucket: "auth-2a55f.appspot.com",
    messagingSenderId: "484833665801",
    appId: "1:484833665801:web:3b69920de32b3e875d69d8"
  };

const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);