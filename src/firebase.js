// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTitVd1GMrMCiapvp4_UbZfx4EbHYa-jk",
    authDomain: "whatsapp-clone-8b157.firebaseapp.com",
    projectId: "whatsapp-clone-8b157",
    storageBucket: "whatsapp-clone-8b157.appspot.com",
    messagingSenderId: "301526873347",
    appId: "1:301526873347:web:bbe50fa2e4cf6563682536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }