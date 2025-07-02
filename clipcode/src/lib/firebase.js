import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC9IdJ73_uZwlkFZolqv1zF15ZMnyYMS2M",
  authDomain: "clipcode-8b073.firebaseapp.com",
  databaseURL: "https://clipcode-8b073-default-rtdb.firebaseio.com",
  projectId: "clipcode-8b073",
  storageBucket: "clipcode-8b073.firebasestorage.app",
  messagingSenderId: "6462286145",
  appId: "1:6462286145:web:411363f7f87f23b15499c0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get };
