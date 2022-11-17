import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjzc_RYanj77OT2uudTCK78joKdGgJTwI",
  authDomain: "wallet-b047c.firebaseapp.com",
  projectId: "wallet-b047c",
  storageBucket: "wallet-b047c.appspot.com",
  messagingSenderId: "813886147600",
  appId: "1:813886147600:web:7898368ace2b488fea0e95",
  measurementId: "G-4L2K545X8Z",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "wallets")
getDocs(colRef)
    .then((snapshot: any) => {
        console.log(snapshot.docs)
    })