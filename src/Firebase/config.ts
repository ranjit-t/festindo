import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiq4qXGO3Y343-JTBvm5HLT7oVSVxTvyc",
  authDomain: "festindo-daffe.firebaseapp.com",
  projectId: "festindo-daffe",
  storageBucket: "festindo-daffe.appspot.com",
  messagingSenderId: "268635641346",
  appId: "1:268635641346:web:658e1abefeaad9efe0791b",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
