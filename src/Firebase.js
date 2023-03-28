// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
  } from 'firebase/firestore';

  import { 
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getAuth
  } from 'firebase/auth';


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


async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
  }

  // Returns the signed-in user's display name.
function getUserName() {
  const user = getAuth().currentUser.displayName;
    if (user === null) {
      setTimeout(() => {
        getUserName()
      }, 500)
    } else {
      return user
    }
  }


  async function addScore(time) {
    try {
        await addDoc(collection(firestore, 'leaderboard'), {
            name: getUserName(),
            time: time
        })
    }
    catch (error) {
        console.log('Error: ', error)
    }
}

const saveScore = (time) => {
    signIn().then(addScore(time));
}

export { app, firestore, saveScore }