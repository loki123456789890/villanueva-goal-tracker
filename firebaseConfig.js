
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuAEBpRasBLtniYRn4joY2vS46KrzGPAg",
  authDomain: "goalproject-hrv.firebaseapp.com",
  projectId: "goalproject-hrv",
  storageBucket: "goalproject-hrv.firebasestorage.app",
  messagingSenderId: "486546982307",
  appId: "1:486546982307:web:c7abc5cc6296bbcf908616"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)