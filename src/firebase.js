import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASru-3CwoPJs1H_v0pSLIT2YdY928fzBo",

  authDomain: "josh-store-react.firebaseapp.com",

  databaseURL: "https://josh-store-react-default-rtdb.firebaseio.com",

  projectId: "josh-store-react",

  storageBucket: "josh-store-react.appspot.com",

  messagingSenderId: "70776724120",

  appId: "1:70776724120:web:d63398182897fbc1e44eed",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
