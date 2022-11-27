import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import {
  getFirestore,
  increment as inc,
  serverTimestamp,
} from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: '',
  appId: '',
  authDomain: '',
  messagingSenderId: '',
  projectId: '',
  storageBucket: '',
};

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

export const increment = inc;
export const timestamp = serverTimestamp;
