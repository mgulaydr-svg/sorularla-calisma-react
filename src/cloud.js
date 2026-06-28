import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Kendi Firebase config ayarlarını buraya yapıştır
const firebaseConfig = {
    apiKey: "AIzaSyCkCJjKs0sNVFfKrFTcssnAkdysygA0_8M",
    authDomain: "sorularla-calisma.firebaseapp.com",
    projectId: "sorularla-calisma",
    storageBucket: "sorularla-calisma.firebasestorage.app",
    messagingSenderId: "43562156674",
    appId: "1:43562156674:web:1b96d082d4e181d66daa9b"
};

// Firebase'i Başlat
const app = initializeApp(firebaseConfig);

// Yetkilendirme (Auth) servisini dışarı aktar
export const auth = getAuth(app);
export { signInWithEmailAndPassword, signOut, onAuthStateChanged };