
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQgIPQJzo1xcx4-2PuqZGsPplZgkeN6HY",
  authDomain: "simple-firebase-d476f.firebaseapp.com",
  projectId: "simple-firebase-d476f",
  storageBucket: "simple-firebase-d476f.appspot.com",
  messagingSenderId: "208938388143",
  appId: "1:208938388143:web:e8856b2eceabd1bc1ae25a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;