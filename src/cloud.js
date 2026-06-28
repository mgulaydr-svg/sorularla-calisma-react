import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, setDoc, writeBatch, deleteDoc } from 'firebase/firestore';

// KENDİ FIREBASE CONFIG BİLGİLERİN BURADA OLMALI (Aynı kalsın)
const firebaseConfig = {
    apiKey: "AIzaSyCkCJjKs0sNVFfKrFTcssnAkdysygA0_8M",
    authDomain: "sorularla-calisma.firebaseapp.com",
    projectId: "sorularla-calisma",
    storageBucket: "sorularla-calisma.firebasestorage.app",
    messagingSenderId: "43562156674",
    appId: "1:43562156674:web:1b96d082d4e181d66daa9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Veritabanı bağlantısı kuruldu

export { 
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
  collection, getDocs, doc, setDoc, writeBatch, deleteDoc 
};