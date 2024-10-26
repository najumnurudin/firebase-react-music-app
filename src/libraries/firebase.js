import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "fir-music-app-699a7.firebaseapp.com",
    projectId: "fir-music-app-699a7",
    storageBucket: "fir-music-app-699a7.appspot.com",
    messagingSenderId: "200187239376",
    appId: "1:200187239376:web:d25e373130c663043137d5"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()