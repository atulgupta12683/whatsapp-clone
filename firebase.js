import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxIi2OpUyQUTiPytGQbv_0o6MMo_l2-Mc",
  authDomain: "whatspp-clobe.firebaseapp.com",
  projectId: "whatspp-clobe",
  storageBucket: "whatspp-clobe.appspot.com",
  messagingSenderId: "819540348861",
  appId: "1:819540348861:web:0d79f5be60baf6b6af0cd4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
