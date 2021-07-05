import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAu9ePIQB7bALhdE5AtczsI0TSe7R1PZbE",
    authDomain: "disneyplus-clone-8bba8.firebaseapp.com",
    projectId: "disneyplus-clone-8bba8",
    storageBucket: "disneyplus-clone-8bba8.appspot.com",
    messagingSenderId: "446565051278",
    appId: "1:446565051278:web:89c7484b9e4b5374d0d2df",
    measurementId: "G-EGLZBXKKLH"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
