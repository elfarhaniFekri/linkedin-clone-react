import firebase from "firebase";
//add your firebase data
const firebaseConfig = {
  apiKey: "---",
  authDomain: "---",
  projectId: "---",
  storageBucket: "--",
  messagingSenderId: "---",
  appId: "--"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
