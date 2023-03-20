// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcLUT6KxmE7Ve0DcmL5PfBmFdeVdmuHbg",
  authDomain: "netflix-clone-5a12c.firebaseapp.com",
  projectId: "netflix-clone-5a12c",
  storageBucket: "netflix-clone-5a12c.appspot.com",
  messagingSenderId: "523183301847",
  appId: "1:523183301847:web:ca8831430f1cd5d49dfc92",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}
