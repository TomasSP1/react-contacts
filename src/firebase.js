import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRVrtJIDjxHNLWljIzAUFAp0SqXf9GOak",
  authDomain: "contacts-e602a.firebaseapp.com",
  projectId: "contacts-e602a",
  storageBucket: "contacts-e602a.appspot.com",
  messagingSenderId: "678060799610",
  appId: "1:678060799610:web:56009f1756d7c9237e2dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db