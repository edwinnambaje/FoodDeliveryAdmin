
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBO2Jn-OAwvzdCFITrjI7VdCit1dJX6c7U",
  authDomain: "foodie3-55ad0.firebaseapp.com",
  projectId: "foodie3-55ad0",
  storageBucket: "foodie3-55ad0.appspot.com",
  messagingSenderId: "575306778887",
  appId: "1:575306778887:web:323826c1d14139229c1da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);

export {db,storage};