import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE5_LPkFGeedMJ2aZIerYk3RGXSv2_65s",
  authDomain: "chat-60a45.firebaseapp.com",
  projectId: "chat-60a45",
  storageBucket: "chat-60a45.appspot.com",
  messagingSenderId: "576030393002",
  appId: "1:576030393002:web:4287ecb46aaef0649146d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()