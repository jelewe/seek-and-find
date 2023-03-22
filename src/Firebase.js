// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
    getDoc,
    getDocs,
  } from 'firebase/firestore';
  import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const config = {
    apiKey: "AIzaSyBoKM7xIw7gwJHnekJ3K5Mkw0IIWzjGAU8",
    authDomain: "seek-and-find-f9a21.firebaseapp.com",
    projectId: "seek-and-find-f9a21",
    storageBucket: "seek-and-find-f9a21.appspot.com",
    messagingSenderId: "1002565657693",
    appId: "1:1002565657693:web:9011d773266bec42eb19b4"
  };

const app = initializeApp(config);
const firestore = getFirestore(app)







export { app, firestore }