import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAkCSIhQQsnNWcdEMq7Ad85CLR8tRNlrzk",
  authDomain: "twitter-382c7.firebaseapp.com",
  projectId: "twitter-382c7",
  storageBucket: "twitter-382c7.appspot.com",
  messagingSenderId: "710643714278",
  appId: "1:710643714278:web:6483f344cc2ac2c215d327",
  measurementId: "G-2K324CFV42"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;