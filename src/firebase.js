import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9V3OWMfMfODLupUJrVdMqsCGrVTkItxE",
  authDomain: "disney-plus-clone-39fed.firebaseapp.com",
  projectId: "disney-plus-clone-39fed",
  storageBucket: "disney-plus-clone-39fed.appspot.com",
  messagingSenderId: "553677073020",
  appId: "1:553677073020:web:16e01df0a198aee37f37f9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
