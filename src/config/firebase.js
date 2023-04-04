
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCb7Ociq1aEdDBT05JyrGc67Xz5mtHeAV8",
  authDomain: "tiktok---jornada1.firebaseapp.com",
  projectId: "tiktok---jornada1",
  storageBucket: "tiktok---jornada1.appspot.com",
  messagingSenderId: "705006706285",
  appId: "1:705006706285:web:855cc93394976f10dd2964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;